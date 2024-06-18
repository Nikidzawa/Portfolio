import FREELANCE_IMG from "./freelance.jpg"
import GithubLogo from "../../../sections/footer/gitHub.svg"
import styled from "styled-components";

const SiteName = styled.h1`
    text-align: center;     
    padding-bottom: 20px;
`

const InfoContainer = styled.div`
    display: flex;
    position: relative;
    font-size: 18px;
    gap: 15px;
    
    @media screen and (max-width: 590px){
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
    width: 550px;
    height: 500px;
    
    @media (max-width: 590px) {
        width: 100%;
        height: auto;
        max-height: 700px;
    }
`

const MainInfoContainer = styled.div`
    @media screen and (max-width: 750px) {
        padding-top: 10px;
    }
`

export default function BestFreelanceProjectSection ({language}) {
    return (
        <div style={{minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
            {
                language === "en" ?
                    <>
                        <SiteName>FREELANCE</SiteName>
                        <LinkContainer>
                            <a href={"https://github.com/Nikidzawa/ThatGirl_Oasis_Telebot"}>
                                <img src={GithubLogo}/>
                            </a>
                            <strong style={{fontSize: "25px"}}>ThatGirl Oasis</strong>
                        </LinkContainer>
                        <InfoContainer>
                            <Image src={FREELANCE_IMG}/>
                            <MainInfoContainer>
                                <div><strong>ThatGirl Oasis</strong> - this is a women's community for meeting new
                                    friends and spending quality time together.
                                    For this community, I have created an informational ecosystem that allows finding
                                    new friends and participating in exciting offline events together.
                                </div>
                                <p>The ecosystem includes a Telegram bot for dating, working on the Tinder principle -
                                    you create a profile, choose a photo, and an intelligent recommendation mechanism,
                                    based on physical proximity and age, will find you good company. You can then sign
                                    up for the best offline events in your city through a poster website directly within
                                    the bot.</p>
                            </MainInfoContainer>
                        </InfoContainer>
                    </> :
                    <>
                        <SiteName>ФРИЛАНС</SiteName>
                        <LinkContainer>
                            <a href={"https://github.com/Nikidzawa/ThatGirl_Oasis_Telebot"}>
                                <img src={GithubLogo}/>
                            </a>
                            <strong style={{fontSize: "25px"}}>ThatGirl Oasis</strong>
                        </LinkContainer>
                        <InfoContainer>
                            <Image src={FREELANCE_IMG}/>
                            <MainInfoContainer>
                                <div><strong>ThatGirl Oasis</strong> - это женское сообщество для знакомств и уютного время провождения.
                                    Для этого сообщества я создал информационную экосистему, которая позволяет находить новых подруг и вместе
                                    участвовать в увлекательных оффлайн мероприятиях</div>
                                <p>В экосистему входит телеграм бот для знакомств, работающий по принципу Tinder - создаёшь анкету,
                                    выбираешь фотографию, а умный механизм рекомендаций, на основании физической близости и возраста,
                                    подберёт для тебя хорошую компанию, с которой ты сможешь записаться на лучшие в твоём городе
                                    оффлайн мероприятия через сайт-афишу прямо внутри бота</p>
                            </MainInfoContainer>
                        </InfoContainer>
                    </>
            }
        </div>
    )
}