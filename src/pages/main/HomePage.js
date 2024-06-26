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

const BottomNavigateButton = styled.img`
    position: fixed;
    bottom: 20px;
    right: 25px;
    width: 60px;
    cursor: pointer;
    display: ${props => props.isLastSection ? "none" : "flex"};
    z-index: 1000;
    
    @media screen and (max-width: 600px) {
        width: 40px;
    }
`

const UpNavigateButton = styled.img`
    position: fixed;
    bottom: 90px;
    right: 25px;
    width: 60px;
    cursor: pointer;
    display: ${props => props.isFirstSection ? "none" : "flex"};

    @media screen and (max-width: 600px) {
        bottom: 70px;
        width: 40px;
    }
`

export default function HomePage ({language, setLanguage, theme, setTheme}) {
    const starterSectionRef = useRef(null);
    const bestPetProjectRef = useRef(null);
    const bestFreelanceProjectRef = useRef(null);
    const skillsSectionRef = useRef(null);
    const contactsSectionRef = useRef(null);

    const sections = [
        { ref: starterSectionRef, id: 'starterSection' },
        { ref: bestPetProjectRef, id: 'bestPetProject' },
        { ref: bestFreelanceProjectRef, id: 'bestFreelanceProject' },
        { ref: skillsSectionRef, id: 'skillsSection' },
        { ref: contactsSectionRef, id: 'contactsSection' },
    ];

    const [currentSection, setCurrentSection] = useState(null);
    const [isFirstSection, setFirstSection] = useState(true);
    const [isLastSection, setLastSection] = useState(false);

    const handleScroll = (scroll) => {
        if (scroll.current) {
            scroll.current.scrollIntoView({
                behavior: 'smooth',
                block: window.innerWidth < 750 ? 'start' : 'center',
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
        if (nextIndex >= sections.length - 1) {
            setLastSection(true);
        } else {
            setLastSection(false);
        }
        return sections[nextIndex];
    };

    const getPrevSection = () => {
        if (!currentSection) {
            setFirstSection(true);
            return sections[0];
        }
        const currentIndex = sections.findIndex(section => section.id === currentSection);
        const prevIndex = currentIndex - 1;
        if (prevIndex <= 0) {
            setFirstSection(true);
        } else {
            setFirstSection(false);
        }
        return sections[prevIndex];
    };

    const updateCurrentSection = () => {
        const offset = window.innerHeight / 2;
        const section = sections.find(({ ref }) => {
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

    useEffect(() => {
        window.addEventListener('scroll', updateCurrentSection);
        return () => window.removeEventListener('scroll', updateCurrentSection);
    }, []);

    return (
        <>
            <StarterSection
                starterSectionRef={starterSectionRef}
                language={language}
                setLanguage={setLanguage}
                theme={theme}
                setTheme={setTheme}
            />
            <main className={"main-container"}>
                <Separator theme={theme}/>
                <BestPetProjectSection
                    language={language}
                    bestPetProjectRef={bestPetProjectRef}
                />
                <Separator theme={theme}/>
                <BestFreelanceProjectSection
                    language={language}
                    bestFreelanceProjectRef={bestFreelanceProjectRef}
                />
                <Separator theme={theme}/>
                <SkillsSection
                    theme={theme}
                    language={language}
                    skillsSectionRef={skillsSectionRef}
                />
                <Separator theme={theme}/>
                <ContactsSection contactsSectionRef={contactsSectionRef} language={language} theme={theme}/>
            </main>
            <UpNavigateButton isFirstSection={isFirstSection} onClick={handlePrevScroll} src={theme === "dark" ? UP_BUTTON_IMAGE : UP_BUTTON_BLACK_IMG}/>
            <BottomNavigateButton isLastSection={isLastSection} onClick={handleNextSection} src={theme === "dark" ? DOWN_BUTTON_IMAGE : DOWN_BUTTON_BLACK_IMG}/>
        </>
    );
}
