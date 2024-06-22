import styled from "styled-components";
import TELEGRAM_IMG from "./telega.png"
import TELEGRAM_BLACK_IMG from "./telegaBlack.png"
import GITHUB_IMG from "../../img/github.png"
import MAIL_IMG from "../../img/mail.png"
import MAIL_BLACK_IMG from "../../img/mailBlack.png"

const FooterContainer = styled.footer`
    border-top: 1px solid ${props => props.theme === "dark" ? "white" : "black"};
    height: 150px;
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

export default function FooterSection ({theme}) {
    return (
        <FooterContainer theme={theme}>
            <Links>
                <a href={"https://t.me/Nikidzawa"}>
                    <img alt={"Telegram"}
                         height={"42px"}
                         width={"42px"}
                         src={theme === "dark" ? TELEGRAM_IMG : TELEGRAM_BLACK_IMG}/>
                </a>
                <a href={"https://github.com/Nikidzawa"}>
                    <img alt={"GitHub"}
                         height={"45px"}
                         width={"45px"}
                         src={GITHUB_IMG}/>
                </a>
                <a href={"mailto:datr1932@mail.ru"}>
                    <img alt={"Mail"}
                         height={"45px"}
                         width={"45px"}
                         src={theme === "dark" ? MAIL_IMG : MAIL_BLACK_IMG}/>
                </a>
            </Links>
            <span style={{paddingBottom: "5px"}}>© NIKIDZAWA.RU, 2024</span>
        </FooterContainer>
    )
}