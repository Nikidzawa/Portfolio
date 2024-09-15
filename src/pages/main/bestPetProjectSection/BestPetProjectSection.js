import GoLinkLogo from "./img/goLink.png"
import GithubLogo from "../../../img/github.png"
import styled from "styled-components";
import languageController from "../../../store/LanguageController";
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";

const MainContainer = styled.div`
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (max-width: 750px){
        min-height: 95vh;
    }
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

const InfoContainer = styled.div`
    display: flex;
    position: relative;
    gap: 15px;
    font-size: 18px;

    @media screen and (max-width: 750px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 15px;
    }
`

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    gap: 5px;
    a {
        img {
            width: 40px;
            @media (max-width: 750px) {
                width: 30px;
            }
        }
    }
    strong {
        font-size: 25px;
        @media (max-width: 750px) {
            font-size: 23px;
        }
    }
`

const Image = styled.img`
    width: 450px;
    height: 450px;
    
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

export default observer(function BestPetProjectSection ({bestPetProjectRef}) {
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
                <strong>{languagePageData.name}</strong>
            </LinkContainer>
            <InfoContainer>
                <Image src={GoLinkLogo}/>
                <MainInfoContainer>
                    <div><strong>{languagePageData.previewTitle}</strong> {languagePageData.preview}</div>
                    <p>{languagePageData.firstParagraph}</p>
                    <p>{languagePageData.secondParagraph}</p>
                </MainInfoContainer>
            </InfoContainer>
        </MainContainer>
    )
})