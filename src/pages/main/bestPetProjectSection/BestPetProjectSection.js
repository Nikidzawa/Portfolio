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
    font-size: 18px;

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

export default function BestPetProjectSection ({language}) {
    return (
        <>
            {
                language === "en" ?
                    <>
                        <SiteName>BEST PET PROJECT</SiteName>
                        <LinkContainer>
                            <a href={"https://github.com/Nikidzawa/Go_Link"}>
                                <img src={GithubLogo}/>
                            </a>
                            <strong style={{fontSize: "25px"}}>GoLink Messenger</strong>
                        </LinkContainer>
                        <InfoContainer>
                            <Image src={GoLinkLogo}/>
                            <MainInfoContainer>
                                <div><strong>GoLink</strong> - this is my desktop equivalent of the Telegram messenger
                                </div>
                                <p>It has all the functions typical of regular messengers - it supports sending text,
                                    photos, voice messages, and has a built-in media and audio player. Messages can be
                                    edited and deleted.</p>
                                <p>The messenger is well optimized. The database is used only during the first launch,
                                    all other actions, including sending messages, are carried out using the TCP/IP
                                    network protocol.</p>

                            </MainInfoContainer>
                        </InfoContainer>
                    </> :
                    <>
                        <SiteName>ЛУЧШИЙ ПЕТ ПРОЕКТ</SiteName>
                        <LinkContainer>
                            <a href={"https://github.com/Nikidzawa/Go_Link"}>
                                <img src={GithubLogo}/>
                            </a>
                            <strong style={{fontSize: "25px"}}>Мессенджер GoLink</strong>
                        </LinkContainer>
                        <InfoContainer>
                            <Image src={GoLinkLogo}/>
                            <MainInfoContainer>
                                <div><strong>GoLink</strong> - это мой десктопный аналог мессенджера Telegram</div>
                                <p>Есть все функции присущие обынчым мессенджерам -
                                    он поддерживает отправку текста, фотографий, голосовых сообщений и имеет встроенный медиа и аудио плеер.
                                    Можно изменять и удалять сообщения</p>
                                <p>
                                    Мессенджер хорошо оптимизирован. Использование базы данных происходит только при первом запуске,
                                    все остальные действия, в том числе отправка сообщений, осуществляются с помощью сетевого
                                    протокола TCP/IP
                                </p>
                            </MainInfoContainer>
                        </InfoContainer>
                    </>
            }
        </>
    )
}