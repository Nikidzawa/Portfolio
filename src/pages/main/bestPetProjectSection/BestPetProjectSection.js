import ENIGMA_1_IMAGE from "../../../img/enigma1.png"
import ENIGMA_2_IMAGE from "../../../img/enigma2.png"
import ENIGMA_3_IMAGE from "../../../img/enigma3.png"
import GithubLogo from "../../../img/github.png"
import styled, {css, keyframes} from "styled-components";
import languageController from "../../../store/LanguageController";
import React, {useEffect, useState} from "react";
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
    gap: 10px;

    a {
        img {
            width: 40px;
            @media (max-width: 750px) {
                width: 30px;
            }
        }
    }
`

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
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

const DescriptionList = styled.div`
    ${({ $isExpanded }) => $isExpanded ?
    css`animation: ${fadeIn} 0.3s ease-out forwards;` :
    css`animation: ${fadeOut} 0.3s ease-out forwards;`
}
`;

const DescriptionContainer = styled.div`
    overflow: hidden;
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

export default observer(function BestPetProjectSection({bestPetProjectRef}) {
    const [languagePageData, setLanguagePageData] = useState({});
    const [isExpanded, setIsExpanded] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRenderDescription, setShouldRenderDescription] = useState(false);

    useEffect(() => {
        setLanguagePageData(languageController.getTranslation("bestPetProject"));
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
        <MainContainer ref={bestPetProjectRef}>
            <SectionName>{languagePageData.title}</SectionName>
            <ProjectContainer>
                <LinkContainer>
                    <a href={"https://github.com/Nikidzawa/Enigma"}>
                        <img alt={"GIT"} src={GithubLogo}/>
                    </a>
                    <ProjectName>{languagePageData.name}</ProjectName>
                </LinkContainer>
                <InfoContainer>
                    <Image src={ENIGMA_1_IMAGE} onClick={() => imageWidgetController.showWidget([ENIGMA_1_IMAGE, ENIGMA_2_IMAGE, ENIGMA_3_IMAGE])}/>
                    <div>
                        <div>{languagePageData.previewTitle} {languagePageData.preview}</div>
                        <DescriptionContainer>
                            <ToggleButton onClick={toggleDescription} aria-expanded={isExpanded}>
                                {isExpanded ? 'Скрыть' : 'Подробнее о проекте'}
                            </ToggleButton>
                            {(shouldRenderDescription || isExpanded) && (
                                <DescriptionList $isExpanded={isExpanded}>
                                    <div>{languagePageData.desc1}</div>
                                </DescriptionList>
                            )}
                        </DescriptionContainer>
                    </div>
                </InfoContainer>
            </ProjectContainer>
        </MainContainer>
    )
})