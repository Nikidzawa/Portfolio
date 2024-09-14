import styled from "styled-components";
import TELEGRAM_IMG from "../../../img/telega.png";
import TELEGRAM_BLACK_IMG from "../../../img/telegaBlack.png";
import GITHUB_IMG from "../../../img/github.png";
import MAIL_IMG from "../../../img/mail.png";
import MAIL_BLACK_IMG from "../../../img/mailBlack.png";
import CODE_WARS_WHITE_IMG from "../../../img/codewarsWhite.png";
import CODE_WARS_BLACK_IMG from "../../../img/codewarsBlack.png";
import themeController from "../../../store/ThemeController";

const MainContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
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

const SiteNameContainer = styled.div`
    position: absolute;
    bottom: 3vh;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
`

const Links = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    column-gap: 30px;
    row-gap: 20px;
    padding: 30px;
    display: flex;
    justify-content: center;
`

export default function ContactsSection ({language, contactsSectionRef}) {
    return (
        <MainContainer ref={contactsSectionRef}>
            <SectionName>{language === "en" ? "Social Links" : "Связь со мной"}</SectionName>
            <Links>
                <a href={"https://t.me/Nikidzawa"}>
                    <img alt={"Telegram"}
                         height={"42px"}
                         width={"42px"}
                         src={themeController.themeIsDark() ? TELEGRAM_IMG : TELEGRAM_BLACK_IMG}/>
                </a>
                <a href={"https://github.com/Nikidzawa"}>
                    <img alt={"GitHub"}
                         height={"45px"}
                         width={"45px"}
                         src={GITHUB_IMG}/>
                </a>
                <a href={"https://www.codewars.com/users/Nikidzawaa"}>
                    <img alt={"CodeWars"}
                         height={"45px"}
                         width={"45px"}
                         src={themeController.themeIsDark() ? CODE_WARS_WHITE_IMG : CODE_WARS_BLACK_IMG}/>
                </a>
                <a href={"mailto:datr1932@mail.ru"}>
                    <img alt={"Mail"}
                         height={"45px"}
                         width={"45px"}
                         src={themeController.themeIsDark() ? MAIL_IMG : MAIL_BLACK_IMG}/>
                </a>
            </Links>
            <SiteNameContainer>© NIKIDZAWA.RU, 2024</SiteNameContainer>
        </MainContainer>
    )
}