import FREELANCE_IMG from "./img/freelance.jpg"
import FREELANCE2_IMG from "./img/freelance2.png"
import FREELANCE3_IMG from "./img/freelance3.png"
import FREELANCE4_IMG from "./img/freelance4.png"
import FREELANCE5_IMG from "./img/freelance5.jpg"
import FREELANCE6_IMG from "./img/freelance6.png"
import GithubLogo from "../../../img/github.png"
import styled from "styled-components";
import React, {useEffect, useState} from "react";
import languageController from "../../../store/LanguageController";
import {observer} from "mobx-react-lite";
import imageWidgetController from "../../../store/ImageWidgetController";

const MainContainer = styled.div`
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 750px) {
        min-height: 110vh;
    }
`

const SectionName = styled.h1`
    text-align: center;
    height: 70px;

    @media screen and (max-width: 750px) {
        height: auto;
        font-size: 27px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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

export default observer(function BestFreelanceProjectSection({bestFreelanceProjectRef}) {
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
                    <ProjectName>{languagePageData.name}</ProjectName>
                </LinkContainer>
                <InfoContainer>
                    {
                        window.innerWidth < 600 ? (
                            <>
                                <ImageAndFirstParagraph>
                                    <Image src={FREELANCE5_IMG}
                                           onClick={() => imageWidgetController.showWidget([FREELANCE_IMG, FREELANCE2_IMG, FREELANCE3_IMG, FREELANCE4_IMG, FREELANCE6_IMG])}/>
                                    <div><strong>{languagePageData.name}</strong> {languagePageData.firstParagraph}
                                    </div>
                                </ImageAndFirstParagraph>
                                <div>
                                    <div>{languagePageData.secondParagraph}</div>
                                </div>
                            </>
                        ) : (
                            <>
                                <Image src={FREELANCE5_IMG}
                                       onClick={() => imageWidgetController.showWidget([FREELANCE_IMG, FREELANCE2_IMG, FREELANCE3_IMG, FREELANCE4_IMG, FREELANCE6_IMG])}/>
                                <div>
                                    <div><strong>{languagePageData.name}</strong> {languagePageData.firstParagraph}
                                    </div>
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