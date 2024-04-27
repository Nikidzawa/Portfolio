import GoLinkLogo from "./goLink.png"
import GithubLogo from "../../../sections/footer/gitHub.svg"
import styled from "styled-components";

const InfoContainer = styled.div`
    display: flex;
    position: relative;
    gap: 15px;
    
    @media screen and (max-width: 750px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
`

const Image = styled.img`
    width: 450px;
    height: 450px;
    
    @media (max-width: 450px) {
        width: 100%;
        height: auto;
    }
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export default function BestProjectSection () {
    return (
        <>
            <h1 style={{textAlign: "center", padding: "0 0 10px"}}>Лучший пет-проект</h1>
            <InfoContainer>
                <Image src={GoLinkLogo}/>
                <TextContainer>
                    <div>
                        <div style={{fontSize: "25px"}}><strong>Мессенджер GoLink</strong></div>
                        <p>Мой аналог популярного мессенджера - Telegram</p>
                        <p>Есть все функции присущие обынчым мессенджерам -
                            он поддерживает отправку, фотографий, голосовых сообщений и имеет встроенный медиа и аудио
                            плеер.
                            Можно изменять и удалять сообщения</p>

                        <p>Мессенджер хорошо оптимизирован, использование базы данных происходит только при входе в
                            мессенджер,
                            все остальные действия, в том числе отправка сообщений, осуществляются с помощью сетевого
                            протокола TCP/IP</p>
                    </div>
                    <LinkContainer>
                        <a href={"https://github.com/Nikidzawa/Go_Link"}>
                            <img width={"30px"} src={GithubLogo}/>
                        </a>
                    </LinkContainer>
                </TextContainer>
            </InfoContainer>
        </>
    )
}