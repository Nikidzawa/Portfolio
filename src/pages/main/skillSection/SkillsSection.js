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

const Category = styled.div`
    padding: 0 10px;
    display: block;
    min-height: 800px;
`

const SkillsButtons = styled.div`
    padding-top: 30px;
    display: flex;
    gap: 10px;
    
    @media screen and (max-width: 600px) {
        padding: 0;
    }
`

const Components = styled.div`
    padding: 10px;
`

export default function SkillsSection ({language}) {
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
        <Category>
            {language === "en" ?
                <h1 style={{textAlign: "center"}}>MY STACK</h1>
                :
                <h1 style={{textAlign: "center"}}>МОЙ СТЕК</h1>
            }
            <SkillsButtons>
                <SkillButton onClick={() => handleChange("Backend")}
                             className={category === "Backend" ? "active" : ""}>Backend</SkillButton>
                <SkillButton onClick={() => handleChange("Frontend")}
                             className={category === "Frontend" ? "active" : ""}>Frontend</SkillButton>
                <SkillButton onClick={() => handleChange("Other")}
                             className={category === "Other" ? "active" : ""}>Other</SkillButton>
            </SkillsButtons>
            <Components>{getText()}</Components>
        </Category>
    )
}