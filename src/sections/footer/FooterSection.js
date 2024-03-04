import styled from "styled-components";
import TELEGRAM_IMG from "./telega.png"
import GITHUB_IMG from "./gitHub.svg"

const FooterContainer = styled.footer`
    border-top: 1px solid azure;
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

export default function FooterSection () {
    return (
        <FooterContainer>
            <Links>
                <a href={"https://t.me/Nikidzawa"}><img alt={"Telegram"} height={"45px"} width={"45px"} src={TELEGRAM_IMG}/></a>
                <a href={"https://github.com/Nikidzawa"}><img alt={"Desktop"} height={"45px"} width={"45px"} src={GITHUB_IMG}/></a>
            </Links>
            <span style={{paddingBottom: "5px"}}>© NIKIDZAWA.RU, 2024</span>
        </FooterContainer>
    )
}