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

    @media screen and (max-width: 900px) {
        margin-top: 15px;
    }
`;

const Category = styled.div`
    padding: 10px;
    display: block;
    justify-content: center;
    align-items: center;
`

const SkillsButtons = styled.div`
    padding-top: 30px;
    display: flex;
    @media screen and (max-width: 900px) {
        padding-top: 10px;
        display: grid;
        justify-content: center;
        padding-bottom: 10px;
    }
`

export default function SkillsSection () {
    const [category, setCategory] = useState();

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
        }
    }

    return (
        <Category>
            <h1 style={{textAlign: "center"}}>MY SKILLS</h1>
            <SkillsButtons>
                <SkillButton onClick={() => handleChange("Backend")}
                             className={category === "Backend" ? "active" : ""}>Backend</SkillButton>
                <SkillButton onClick={() => handleChange("Frontend")}
                             className={category === "Frontend" ? "active" : ""}>Frontend</SkillButton>
                <SkillButton onClick={() => handleChange("Other")}
                             className={category === "Other" ? "active" : ""}>Other</SkillButton>
            </SkillsButtons>
            <ul>{getText()}</ul>
        </Category>
    )
}