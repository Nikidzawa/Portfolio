import FREELANCE_IMG from "../../../img/dating1.jpg"
import FREELANCE2_IMG from "../../../img/dating2.jpg"
import FREELANCE3_IMG from "../../../img/dating3.jpg"
import FREELANCE4_IMG from "../../../img/dating4.jpg"
import TELEGRAM_IMG from "../../../img/telega.png"
import styled, {css, keyframes} from "styled-components";
import React, {useEffect, useState} from "react";
import languageController from "../../../store/LanguageController";
import {observer} from "mobx-react-lite";
import imageWidgetController from "../../../store/ImageWidgetController";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 95vh;
`

const SectionName = styled.h1`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 750px) {
        font-size: 27px;
    }
`

const InfoContainer = styled.div`
    display: flex;
    position: relative;
    gap: 15px;
    font-size: 18px;

    @media screen and (max-width: 500px) {
        font-size: 15px;
    }
`

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 0 12px 0;
    gap: 15px;

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

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const Image = styled.img`
    min-width: auto;
    height: 500px;
    cursor: pointer;

    @media (max-width: 750px) {
        width: 50%;
        height: auto;
    }
`

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
        max-height: 0;
    }
    to {
        opacity: 1;
        transform: translateY(0);
        max-height: 500px;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
        max-height: 500px;
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
        max-height: 0;
    }
`;

const DescriptionContainer = styled.div`
    overflow: hidden;
    padding-bottom: 20px;
`;

const DescriptionList = styled.div`
    ${({ $isExpanded }) => $isExpanded ?
            css`animation: ${fadeIn} 0.3s ease-out forwards;` :
            css`animation: ${fadeOut} 0.3s ease-out forwards;`
    }
`;

const ToggleButton = styled.button`
    background: none;
    border: none;
    color: #24B5D5FC;
    cursor: pointer;
    font-size: inherit;
    padding: 0;
    margin: 10px 0;
    text-align: left;
    display: flex;
    align-items: center;
    font-weight: bold;
  
    &::after {
        content: '▼';
        font-size: 0.8em;
        margin-left: 5px;
        transition: transform 0.3s;
    }
  
    &[aria-expanded="true"]::after {
        transform: rotate(180deg);
    }
`;

export default observer(function BestFreelanceProjectSection({bestFreelanceProjectRef}) {
    const [languagePageData, setLanguagePageData] = useState({});
    const [isExpanded, setIsExpanded] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRenderDescription, setShouldRenderDescription] = useState(false);

    useEffect(() => {
        setLanguagePageData(languageController.getTranslation("bestFreelanceProject"));
    }, [languageController.currentLanguage])

    const toggleDescription = () => {
        if (isAnimating) return;

        if (isExpanded) {
            setIsAnimating(true);
            setTimeout(() => {
                setShouldRenderDescription(false);
                setIsAnimating(false);
            }, 300);
        } else {
            setShouldRenderDescription(true);
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <MainContainer ref={bestFreelanceProjectRef}>
            <SectionName>{languagePageData.title}</SectionName>
            <ProjectContainer>
                <LinkContainer>
                    <a href={"https://t.me/likestep_bot"} target={"_blank"}>
                        <img src={TELEGRAM_IMG} alt={"GIT"} style={{width: "32px"}}/>
                    </a>
                    <ProjectName>{languagePageData.name}</ProjectName>
                </LinkContainer>

                {
                    window.innerWidth > 600 ? (
                        <InfoContainer>
                            <Image src={FREELANCE_IMG}
                                   onClick={() => imageWidgetController.showWidget([FREELANCE_IMG, FREELANCE2_IMG, FREELANCE3_IMG, FREELANCE4_IMG])}/>
                            <div>
                                <div>{languagePageData.resume}</div>
                                <DescriptionContainer>
                                    <ToggleButton onClick={toggleDescription} aria-expanded={isExpanded}>
                                        {isExpanded ? 'Скрыть' : 'Подробнее о проекте'}
                                    </ToggleButton>
                                    {(shouldRenderDescription || isExpanded) && (
                                        <DescriptionList $isExpanded={isExpanded}>
                                            <div>{languagePageData.desc1}</div>
                                            <p>{languagePageData.desc2}</p>
                                            <p>{languagePageData.desc3}</p>
                                            <p>{languagePageData.desc4}</p>
                                        </DescriptionList>
                                    )}
                                </DescriptionContainer>
                            </div>
                        </InfoContainer>
                    ) : (
                        <div style={{paddingBottom: "20px"}}>
                            <InfoContainer>
                                <Image src={FREELANCE_IMG}
                                       onClick={() => imageWidgetController.showWidget([FREELANCE_IMG, FREELANCE2_IMG, FREELANCE3_IMG, FREELANCE4_IMG])}/>
                                <div>
                                    <div>{languagePageData.resume}</div>
                                </div>
                            </InfoContainer>
                            <DescriptionContainer>
                                <ToggleButton onClick={toggleDescription} aria-expanded={isExpanded}>
                                    {isExpanded ? 'Свернуть описание' : 'Развернуть описание'}
                                </ToggleButton>
                                {(shouldRenderDescription || isExpanded) && (
                                    <DescriptionList $isExpanded={isExpanded}>
                                        <div>{languagePageData.desc1}</div>
                                        <p>{languagePageData.desc2}</p>
                                        <p>{languagePageData.desc3}</p>
                                        <p>{languagePageData.desc4}</p>
                                    </DescriptionList>
                                )}
                            </DescriptionContainer>
                        </div>
                    )
                }
            </ProjectContainer>
        </MainContainer>
    )
})