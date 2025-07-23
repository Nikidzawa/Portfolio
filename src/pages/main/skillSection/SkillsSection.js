import styled from "styled-components";
import {useEffect, useState} from "react";
import {GetBackEndSkills, GetFrontendSkills, GetOtherSkills} from "./data/SkillsData";
import SkillComponent from "./components/SkillComponent";
import GearWheel from "../../../img/svg/GearWheel";
import themeController from "../../../store/ThemeController";
import languageController from "../../../store/LanguageController";
import {observer} from "mobx-react-lite";

const MainContainer = styled.div`
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`

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
        background-color: #0094b8;
        color: white;
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
        width: 38vh;
        height: 38vh;

        max-width: 450px;
        max-height: 450px;

        g {
            path {
                fill: ${props => props.themeIsDark === true ? "#202020" : "#E6E6E6"};
            }
        }
    }
`

const SectionNameContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 750px) {
        flex: 0;
        min-height: 20vh;
    }
`

const SectionName = styled.h1`
    text-align: center;

    @media screen and (max-width: 750px) {
        font-size: 27px;
    }
`

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const Category = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 600px;
    font-weight: max(450);
`

const SkillsButtons = styled.div`
    display: flex;
`

const Components = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 0 0 10px;
`

export default observer(function SkillsSection({skillsSectionRef}) {
    const [languagePageData, setLanguagePageData] = useState({});
    const [category, setCategory] = useState("Backend");

    useEffect(() => {
        setLanguagePageData(languageController.getTranslation("skillsSection"));
    }, [languageController.currentLanguage])

    function handleChange(props) {
        setCategory(props)
    }

    function getText() {
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
            <SectionNameContainer>
                <SectionName>{languagePageData.title}</SectionName>
            </SectionNameContainer>
            <ProjectContainer>
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
                <Category>
                    <Components>{getText()}</Components>
                </Category>
            </ProjectContainer>
        </MainContainer>
    )
})