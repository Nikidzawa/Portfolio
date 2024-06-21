import StarterSection from "./starterSection/StarterSection";
import SkillsSection from "./skillSection/SkillsSection";
import BestPetProjectSection from "./bestPetProjectSection/BestPetProjectSection";
import Separator from "./separator/Separator";
import BestFreelanceProjectSection from "./bestFreelanceProjectSection/BestFreelanceProjectSection";
import {useEffect, useRef, useState} from "react";
import DOWN_BUTTON_IMAGE from "../../img/downButton.png"
import UP_BUTTON_IMAGE from "../../img/upButton.png"
import styled from "styled-components";

const NavigateButtonContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 25px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    z-index: 1000;
`

const NavigateButton = styled.img`
    width: 60px;
    cursor: pointer;
    
    @media screen and (max-width: 600px) {
        width: 40px;
    }
`

export default function HomePage ({language, setLanguage}) {
    const starterSectionRef = useRef(null);
    const bestPetProjectRef = useRef(null);
    const bestFreelanceProjectRef = useRef(null);
    const skillsSectionRef = useRef(null);

    const sections = [
        { ref: starterSectionRef, id: 'starterSection' },
        { ref: bestPetProjectRef, id: 'bestPetProject' },
        { ref: bestFreelanceProjectRef, id: 'bestFreelanceProject' },
        { ref: skillsSectionRef, id: 'skillsSection' },
    ];

    const [currentSection, setCurrentSection] = useState(null);

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
        }
    }

    const handleNextSection = () => {
        const nextSection = getNextSection();
        if (nextSection) {
            handleScroll(nextSection.ref);
        }
    };

    const getNextSection = () => {
        if (!currentSection) return sections[0];
        const currentIndex = sections.findIndex(section => section.id === currentSection);
        return sections[currentIndex + 1];
    };

    const getPrevSection = () => {
        if (!currentSection) return sections[0];
        const currentIndex = sections.findIndex(section => section.id === currentSection);
        return sections[currentIndex - 1];
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
            />
            <main className={"main-container"}>
                <Separator/>
                <BestPetProjectSection
                    language={language}
                    bestPetProjectRef={bestPetProjectRef}
                />
                <Separator />
                    <BestFreelanceProjectSection
                        language={language}
                        bestFreelanceProjectRef={bestFreelanceProjectRef}
                    />
                <Separator />
                    <SkillsSection
                        language={language}
                        skillsSectionRef={skillsSectionRef}
                    />
                <NavigateButtonContainer>
                    <NavigateButton onClick={handlePrevScroll} src={UP_BUTTON_IMAGE}/>
                    <NavigateButton onClick={handleNextSection} src={DOWN_BUTTON_IMAGE}/>
                </NavigateButtonContainer>
            </main>
        </>
    );
}