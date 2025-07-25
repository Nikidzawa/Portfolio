import StarterSection from "./starterSection/StarterSection";
import SkillsSection from "./skillSection/SkillsSection";
import BestPetProjectSection from "./bestPetProjectSection/BestPetProjectSection";
import Separator from "./separator/Separator";
import BestFreelanceProjectSection from "./bestFreelanceProjectSection/BestFreelanceProjectSection";
import {useEffect, useRef, useState} from "react";
import DOWN_BUTTON_IMAGE from "../../img/downButton.png"
import DOWN_BUTTON_BLACK_IMG from "../../img/downButtonBlack.png"
import UP_BUTTON_IMAGE from "../../img/upButton.png"
import UP_BUTTON_BLACK_IMG from "../../img/upButtonBlack.png"
import styled from "styled-components";
import ContactsSection from "./contactsSection/ContactsSection";
import themeController from "../../store/ThemeController";
import ImageWidget from "../../components/ImageWidget";

const BottomNavigateButton = styled.img`
    position: fixed;
    bottom: 20px;
    right: 25px;
    width: 60px;
    cursor: pointer;
    opacity: ${props => props.isLastSection ? "0" : "1"};
    visibility: ${props => props.isLastSection ? "hidden" : "visible"};
    transition: opacity 0.4s ease, visibility 0.4s ease;
    z-index: 1000;

    @media screen and (max-width: 600px) {
        width: 45px;
        right: 20px;
    }
`

const UpNavigateButton = styled.img`
    position: fixed;
    bottom: 90px;
    right: 25px;
    width: 60px;
    cursor: pointer;
    opacity: ${props => props.isFirstSection ? "0" : "1"};
    visibility: ${props => props.isFirstSection ? "hidden" : "visible"};
    transition: opacity 0.4s ease, visibility 0.4s ease;

    @media screen and (max-width: 600px) {
        bottom: 68px;
        width: 45px;
        right: 20px;
    }
`

export default function HomePage() {
    const starterSectionRef = useRef(null);
    const bestPetProjectRef = useRef(null);
    const bestFreelanceProjectRef = useRef(null);
    const skillsSectionRef = useRef(null);
    const contactsSectionRef = useRef(null);

    const sections = [
        {ref: starterSectionRef, id: 'starterSection'},
        {ref: bestPetProjectRef, id: 'bestPetProject'},
        {ref: bestFreelanceProjectRef, id: 'bestFreelanceProject'},
        {ref: skillsSectionRef, id: 'skillsSection'},
        {ref: contactsSectionRef, id: 'contactsSection'},
    ];

    const [currentSection, setCurrentSection] = useState(null);
    const [isFirstSection, setFirstSection] = useState(true);
    const [isLastSection, setLastSection] = useState(false);

    const handleScroll = (scroll) => {
        if (scroll.current) {
            scroll.current.scrollIntoView({
                behavior: 'smooth',
                block: window.innerHeight < 750 ? 'start' : 'center',
            });
        }
    };

    const handlePrevScroll = () => {
        const prevSect = getPrevSection();
        if (prevSect) {
            handleScroll(prevSect.ref);
            setCurrentSection(prevSect.id);
        }
    };

    const handleNextSection = () => {
        const nextSection = getNextSection();
        if (nextSection) {
            handleScroll(nextSection.ref);
            setCurrentSection(nextSection.id);
        }
    };

    const getNextSection = () => {
        if (!currentSection) {
            setFirstSection(false);
            return sections[1];
        }
        const currentIndex = sections.findIndex(section => section.id === currentSection);
        const nextIndex = currentIndex + 1;
        return sections[nextIndex];
    };

    const getPrevSection = () => {
        if (!currentSection) {
            setFirstSection(true);
            return sections[0];
        }
        const currentIndex = sections.findIndex(section => section.id === currentSection);
        const prevIndex = currentIndex - 1;
        return sections[prevIndex];
    };

    const updateCurrentSection = () => {
        const offset = window.innerHeight / 2;
        const section = sections.find(({ref}) => {
            if (!ref.current) return false;
            const rect = ref.current.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= offset;
        });

        if (section) {
            setCurrentSection(section.id);
            setFirstSection(section.id === sections[0].id);
            setLastSection(section.id === sections[sections.length - 1].id);
        }
    };

    const handleKeyDown = (event) => {
        event.preventDefault(false)
        if (event.key === "ArrowUp") {
            handlePrevScroll();
        } else if (event.key === "ArrowDown") {
            handleNextSection();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', updateCurrentSection);
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('scroll', updateCurrentSection);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentSection]);

    return (
        <>
            <StarterSection starterSectionRef={starterSectionRef}/>
            <main className={"main-container"}>
                <Separator/>
                <BestPetProjectSection bestPetProjectRef={bestPetProjectRef}/>
                <Separator/>
                <BestFreelanceProjectSection bestFreelanceProjectRef={bestFreelanceProjectRef}/>
                <Separator/>
                <SkillsSection skillsSectionRef={skillsSectionRef}/>
                <Separator/>
                <ContactsSection contactsSectionRef={contactsSectionRef}/>
            </main>
            <ImageWidget/>
            <UpNavigateButton title={"ArrowUp"} isFirstSection={isFirstSection} onClick={handlePrevScroll}
                              src={themeController.themeIsDark() ? UP_BUTTON_IMAGE : UP_BUTTON_BLACK_IMG}/>
            <BottomNavigateButton title={"ArrowDown"} isLastSection={isLastSection} onClick={handleNextSection}
                                  src={themeController.themeIsDark() ? DOWN_BUTTON_IMAGE : DOWN_BUTTON_BLACK_IMG}/>
        </>
    );
}
