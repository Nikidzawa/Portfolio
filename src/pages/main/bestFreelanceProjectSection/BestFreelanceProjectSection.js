import FREELANCE_IMG from "./img/freelance.jpg"
import GithubLogo from "../../../img/github.png"
import styled from "styled-components";
import React, {useEffect, useState} from "react";
import languageController from "../../../store/LanguageController";
import {observer} from "mobx-react-lite";
import imageWidgetController from "../../../store/ImageWidgetController";

const MainContainer = styled.div`
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const SectionName = styled.h1`
    text-align: center;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 750px) {
        font-size: 26px;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 390px) {
        font-size: 25px;
    }
    
    @media screen and (max-width: 380px) {
        margin-bottom: 10px;
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
    gap: 5px;
    padding: 0 0 20px 0;
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
    width: 550px;
    height: 500px;
    cursor: pointer;

    @media (max-width: 750px) {
        width: 45%;
        height: auto;
        max-width: 500px;
        max-height: 700px;
    }
`

const ImageAndFirstParagraph = styled.div`
    display: flex;
    gap: 10px;
`

export default observer(function BestFreelanceProjectSection ({bestFreelanceProjectRef}) {
    const [languagePageData, setLanguagePageData] = useState({});

    useEffect(() => {
        setLanguagePageData(languageController.getTranslation("bestFreelanceProject"));
    }, [languageController.currentLanguage])

    return (
        <MainContainer ref={bestFreelanceProjectRef}>
            <div>
                <SectionName>{languagePageData.title}</SectionName>
                <LinkContainer>
                    <a href={"https://github.com/Nikidzawa/ThatGirl_Oasis_Telebot"}>
                        <img src={GithubLogo} alt={"GIT"}/>
                    </a>
                    <strong style={{fontSize: "25px"}}>{languagePageData.name}</strong>
                </LinkContainer>
                <InfoContainer>
                    {
                        window.innerWidth < 600 ? (
                            <>
                                <ImageAndFirstParagraph>
                                    <Image src={FREELANCE_IMG} onClick={() => imageWidgetController.showWidget(FREELANCE_IMG)}/>
                                    <div><strong>{languagePageData.name}</strong> {languagePageData.firstParagraph}</div>
                                </ImageAndFirstParagraph>
                                <div>
                                    <p>{languagePageData.secondParagraph}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <Image src={FREELANCE_IMG} onClick={() => imageWidgetController.showWidget(FREELANCE_IMG)}/>
                                <div>
                                    <div><strong>{languagePageData.name}</strong> {languagePageData.firstParagraph}</div>
                                    <p>{languagePageData.secondParagraph}</p>
                                </div>
                            </>
                        )
                    }
                </InfoContainer>
            </div>
        </MainContainer>
    )
})