import styled from "styled-components";
import {useEffect, useState} from "react";
import {GetBackEndSkills, GetFrontendSkills, GetOtherSkills} from "./data/SkillsData";
import SkillComponent from "./components/SkillComponent";
import MobileDetect from "mobile-detect";
import GearWheel from "../../../img/svg/GearWheel";
import themeController from "../../../store/ThemeController";
import languageController from "../../../store/LanguageController";
import {observer} from "mobx-react-lite";

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();
const SkillButton = styled.button`
    border: none;
    border-radius: 20px;
    padding: 10px;
    margin: 0 auto;
    min-width: 260px;
    font-size: 22px;
    cursor: pointer;
    background-color: ${props => props.themeIsDark === true ? "white" : "black"};
    color: ${props => props.themeIsDark === true ? "black" : "white"};

    @media screen and (max-width: 800px) {  
        min-width: 30%;
        font-size: 18px;
    }

    &.active {
        background-color: blue;
        color: white;
        transition: color 0.5s;
    }

    &:not(${!isMobile}) {
        &:hover {
            opacity: 0.7;
            transition: opacity 0.35s ease-in;
        }
        &:not(:hover) {
            opacity: 1;
            transition: opacity 0.35s ease-in;
        }
    }
`;

const GearWheelContainer = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


    svg {
        margin-top: 100px;
        width: 450px;
        height: 450px;
        g {
            path {
                fill: ${props => props.themeIsDark === true ? "#202020" : "#E6E6E6"};
            }
        }
    }

    @media screen and (max-width: 500px) {
        svg {
            width: 320px;
            height: 320px;
            margin: 0;
        }
    }

    @media screen and (max-width: 390px){
        svg {
            width: 280px;
            height: 280px;
            margin: 0;
        }
    }
`

const MainContainer = styled.div`
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`

const SectionName = styled.h1`
    text-align: center;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 750px){
        font-size: 26px;
    }
    
    @media screen and (max-width: 390px){
        font-size: 25px;
    }
`

const Category = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 800px;
    
    @media screen and (max-height: 750px){
        min-height: 0;
    }
`

const SkillsButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const Components = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0 0 0;
    
    @media screen and (max-width: 500px) {
        padding: 10px;
    }
`

export default observer(function SkillsSection ({skillsSectionRef}) {
    const [languagePageData, setLanguagePageData] = useState({});
    const [category, setCategory] = useState("Backend");

    useEffect(() => {
        setLanguagePageData(languageController.getTranslation("skillsSection"));
    }, [languageController.currentLanguage])

    function handleChange (props) {
        setCategory(props)
    }

    function getText () {
        switch (category) {
            case "Backend":
                return GetBackEndSkills().map(skill => <SkillComponent key={skill.title} skill={skill}/>)
            case "Frontend":
                return GetFrontendSkills().map(skill => <SkillComponent key={skill.title} skill={skill}/>)
            case "Other":
                return GetOtherSkills().map(skill => <SkillComponent key={skill.title} skill={skill}/>)
            default:
                return GetBackEndSkills().map(skill => <SkillComponent key={skill.title} skill={skill}/>)
        }
    }

    return (
        <MainContainer ref={skillsSectionRef}>
            <GearWheelContainer themeIsDark={themeController.themeIsDark()}>
                <GearWheel/>
            </GearWheelContainer>
            <Category>
                <SectionName>{languagePageData.title}</SectionName>
                <SkillsButtons>
                    <SkillButton onClick={() => handleChange("Backend")}
                                 themeIsDark={themeController.themeIsDark()}
                                 className={category === "Backend" ? "active" : ""}>Backend</SkillButton>
                    <SkillButton onClick={() => handleChange("Frontend")}
                                 themeIsDark={themeController.themeIsDark()}
                                 className={category === "Frontend" ? "active" : ""}>Frontend</SkillButton>
                    <SkillButton onClick={() => handleChange("Other")}
                                 themeIsDark={themeController.themeIsDark()}
                                 className={category === "Other" ? "active" : ""}>Other</SkillButton>
                </SkillsButtons>
                <Components>{getText()}</Components>
            </Category>
        </MainContainer>
    )
})