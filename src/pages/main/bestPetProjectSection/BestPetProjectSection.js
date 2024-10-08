import GoLinkLogo from "./img/goLink.png"
import GithubLogo from "../../../img/github.png"
import styled from "styled-components";
import languageController from "../../../store/LanguageController";
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import imageWidgetController from "../../../store/ImageWidgetController";

const MainContainer = styled.div`
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 750px) {
        min-height: 90vh;
    }
`

const SectionName = styled.h1`
    text-align: center;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 750px) {
        height: auto;
        font-size: 26px;
    }
`

const InfoContainer = styled.div`
    display: flex;
    position: relative;
    gap: 15px;
    font-size: 18px;

    @media screen and (max-width: 750px) {
        height: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 16px;
    }

    @media screen and (max-width: 420px) {
        font-size: 15px;
    }
`

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 0 10px 0;
    gap: 5px;

    a {
        img {
            width: 40px;
            @media (max-width: 750px) {
                width: 30px;
            }
        }
    }
`

const ProjectName = styled.strong`
    font-size: 25px;

    @media (max-width: 750px) {
        font-size: 22px;
    }
`

const Image = styled.img`
    width: 450px;
    height: 450px;
    cursor: pointer;

    @media (max-width: 450px) {
        width: 100%;
        height: auto;
    }
`

const MainInfoContainer = styled.div`
    @media screen and (max-width: 750px) {
        padding-top: 10px;
    }
`

export default observer(function BestPetProjectSection({bestPetProjectRef}) {
    const [languagePageData, setLanguagePageData] = useState({});

    useEffect(() => {
        setLanguagePageData(languageController.getTranslation("bestPetProject"));
    }, [languageController.currentLanguage])

    return (
        <MainContainer ref={bestPetProjectRef}>
            <SectionName>{languagePageData.title}</SectionName>
            <LinkContainer>
                <a href={"https://github.com/Nikidzawa/Go_Link"}>
                    <img alt={"GIT"} src={GithubLogo}/>
                </a>
                <ProjectName>{languagePageData.name}</ProjectName>
            </LinkContainer>
            <InfoContainer>
                <Image src={GoLinkLogo} onClick={() => imageWidgetController.showWidget([GoLinkLogo])}/>
                <MainInfoContainer>
                    <div><strong>{languagePageData.previewTitle}</strong> {languagePageData.preview}</div>
                    <p>{languagePageData.firstParagraph}</p>
                </MainInfoContainer>
            </InfoContainer>
        </MainContainer>
    )
})