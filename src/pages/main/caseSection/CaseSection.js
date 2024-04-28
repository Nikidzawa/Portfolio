import styled from "styled-components";
import LOGO from "./logo.jpg"
import TELEGRAM_ICON from "../../../sections/footer/telega.png"
import GithubLogo from "../../../sections/footer/gitHub.svg";

const SectionName = styled.h1`
    text-align: center;
    padding-bottom: 20px;
`

const ProjectInfoContainer = styled.div`
    display: flex;
    gap: 20px;
    border-radius: 20px;
    padding: 10px;
    color: white;
    max-width: 900px;
    align-items: center;
`

const MainContainer = styled.div`
    margin-top: 100px;
    @media screen and (max-width: 750px) {
        margin: 50px auto;
    }
`

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 0 20px 0;
`

const Text = styled.div`
    @media screen and (max-width: 395px) {
        font-size: 15px;
    }
`

export default function CaseSection () {

    return (
        <MainContainer>
            <SectionName>REAL COMMERCIAL CASE</SectionName>
            <LinkContainer>
                <a href={"https://github.com/Nikidzawa/Go_Link"}>
                    <img src={GithubLogo}/>
                </a>
                <strong style={{fontSize: "25px"}}>That Girl Oasis</strong>
            </LinkContainer>
            <ProjectInfoContainer>
                <img width={"125px"} height={"125px"} src={LOGO}/>
                <Text>
                    Женское сообщество для новых знакомств и уютного время провождения.
                    В экосистему входит телеграм бот для знакомств и сайт для записи на офлайн мероприятия
                </Text>
            </ProjectInfoContainer>
            <h3>Особенности проекта</h3>
            <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                <div>⚙️ Умная система рекомендаций, использующая прямое и обратное геокодирование Yandex Maps и Open
                    Street Map
                </div>
                <div>⚙️ Мощная стейт машина в связке с Redis, которая позволила добиться мгновенного отклика в работе
                    приложения
                </div>
                <div>⚙️ Интеграция с облачным хранилищем FireBase для хранения изображений</div>
                <div>⚙️ Интеграция платёжных сервисов</div>
            </div>
            <div style={{display: "flex", gap: "5px", paddingTop: "20px"}}>
                Заказчик проекта -
                <img width={"20px"} height={"18px"} src={TELEGRAM_ICON}/>
                <a href={"https://t.me/leralo_00"}>Лера</a>
            </div>
        </MainContainer>
    )
}