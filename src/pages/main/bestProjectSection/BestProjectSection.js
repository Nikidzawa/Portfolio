import GoLinkLogo from "./goLink.png"
import GithubLogo from "../../../sections/footer/gitHub.svg"
import styled from "styled-components";

const SiteName = styled.h1`
    text-align: center;     
    padding-bottom: 20px;
`

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
    gap: 10px;
    padding: 0 0 20px 0;
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

export default function BestProjectSection () {
    return (
        <>
            <SiteName>BEST PET PROJECT</SiteName>
                <LinkContainer>
                    <a href={"https://github.com/Nikidzawa/Go_Link"}>
                        <img src={GithubLogo}/>
                    </a>
                    <strong style={{fontSize: "25px"}}>Мессенджер GoLink</strong>
                </LinkContainer>
            <InfoContainer>
                <Image src={GoLinkLogo}/>
                <MainInfoContainer>
                    <div>Мой десктопный аналог популярного мессенджера - Telegram</div>
                    <p>Есть все функции присущие обынчым мессенджерам -
                        он поддерживает отправку фотографий, голосовых сообщений и имеет встроенный медиа и аудио
                        плеер.
                        Можно изменять и удалять сообщения</p>
                    <p>
                        Мессенджер хорошо оптимизирован. Использование базы данных происходит только при первом запуске,
                        все остальные действия, в том числе отправка сообщений, осуществляются с помощью сетевого
                        протокола TCP/IP
                    </p>
                </MainInfoContainer>
            </InfoContainer>
        </>
    )
}