import styled from "styled-components";
import {useState} from "react";
import {GetBackEndSkills, GetFrontendSkills, GetOtherSkills} from "../../../data/Skills";
import SkillComponent from "./SkillComponent";

const SkillButton = styled.button`
    border: none;
    border-radius: 20px;
    padding: 10px;
    margin: 0 auto;
    min-width: 250px;
    font-size: 20px;
    font-family: sans-serif;
    cursor: pointer;
    
    &.active {
        background-color: blue;
        color: white;
        transition: background-color 0.5s;
    }
    
    @media (max-width: 830px) {
        min-width: 250px;
        font-size: 20px;
        margin-top: 15px;
    }
`

const Category = styled.div`
    margin-top: 2rem;
    display: block;
    justify-content: center;
    align-items: center;
`

const SkillsButtons = styled.div`
    display: flex;
    @media (max-width: 830px) {
        display: grid;
        justify-content: center;
    }
`

export default function SkillsSection () {
    const [category, setCategory] = useState();

    function handleChange (props) {
        setCategory(props)
    }

    function getText () {
        switch (category) {
            case "BackEnd":
                return GetBackEndSkills().map(skill => <SkillComponent key={skill.title} skill={skill}/>)
            case "FrontEnd":
                return GetFrontendSkills().map(skill => <SkillComponent key={skill.title} skill={skill}/>)
            case "Other":
                return GetOtherSkills().map(skill => <SkillComponent key={skill.title} skill={skill}/>)
        }
    }

    return (
        <Category>
            <SkillsButtons>
                <SkillButton onClick={() => handleChange("BackEnd")} className={category === "BackEnd" ? "active" : ""}>BackEnd</SkillButton>
                <SkillButton onClick={() => handleChange("FrontEnd")} className={category === "FrontEnd" ? "active" : ""}>FrontEnd</SkillButton>
                <SkillButton onClick={() => handleChange("Other")} className={category === "Other" ? "active" : ""}>Other</SkillButton>
            </SkillsButtons>
            <ul>{getText()}</ul>
        </Category>
    )
}