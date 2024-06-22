import styled from "styled-components";
import {useState} from "react";
import {GetBackEndSkills, GetFrontendSkills, GetOtherSkills} from "../../../data/Skills";
import SkillComponent from "./SkillComponent";
import MobileDetect from "mobile-detect";

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
    background-color: ${props => props.theme === "dark" ? "white" : "black"};
    color: ${props => props.theme === "dark" ? "black" : "white"};

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
            transition: opacity 0.5s ease-in;
        }
        &:not(:hover) {
            opacity: 1;
            transition: opacity 0.5s ease-in;
        }
    }
`;
const MainContainer = styled.div`
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (max-width: 750px){
        min-height: 100vh;
        padding-bottom: 10px;
    }
`

const SiteName = styled.h1`
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
`

const SkillsButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const Components = styled.div`
    padding: 10px;
`

export default function SkillsSection ({language, skillsSectionRef, theme}) {
    const [category, setCategory] = useState("Backend");

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
            default: return null
        }
    }

    return (
        <MainContainer ref={skillsSectionRef}>
            <Category>
                {language === "en" ?
                    <SiteName>MY STACK</SiteName>
                    :
                    <SiteName>МОЙ СТЕК</SiteName>
                }
                <SkillsButtons>
                    <SkillButton onClick={() => handleChange("Backend")}
                                 theme={theme}
                                 className={category === "Backend" ? "active" : ""}>Backend</SkillButton>
                    <SkillButton onClick={() => handleChange("Frontend")}
                                 theme={theme}
                                 className={category === "Frontend" ? "active" : ""}>Frontend</SkillButton>
                    <SkillButton onClick={() => handleChange("Other")}
                                 theme={theme}
                                 className={category === "Other" ? "active" : ""}>Other</SkillButton>
                </SkillsButtons>
                <Components>{getText()}</Components>
            </Category>
        </MainContainer>
    )
}