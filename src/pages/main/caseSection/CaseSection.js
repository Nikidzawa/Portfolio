import styled from "styled-components";
import LOGO from "./1.png"
import TELEGRAM_ICON from "../../../sections/footer/telega.png"

const SectionName = styled.h1`
    text-align: center;
`

const ProjectInfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    border-radius: 20px;
    padding: 10px;
    color: white;
`

const MainContainer = styled.div`
    margin-top: 100px;
`

export default function CaseSection () {

    return (
        <MainContainer>
            <SectionName>Реальный коммерческий кейс</SectionName>
            <ProjectInfoContainer>
                <img width={"100px"} src={LOGO}/>
                <div>
                    Создал высоконагруженную FullStack экосистему <strong>That Girl Oasis</strong> - женское сообщество для новых знакомств и
                    уютного время провождения.
                </div>
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