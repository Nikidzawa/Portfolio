import SkillsSection from "./skillSection/SkillsSection";
import styled from "styled-components";
import StarterSection from "./starterSection/StarterSection";

const Main = styled.div`
    max-width: 1200px;
    min-height: 2000px;
    margin: 0 auto;
    padding: 0 20px;
    background-color: black;
    @media screen and (max-width: 1200px) {
        max-width: 100vw;
    }
`
export default function MainPage () {
    return (
        <Main>
            <StarterSection/>
            <SkillsSection/>
        </Main>
    )
}