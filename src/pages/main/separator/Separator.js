import styled from "styled-components";
import themeController from "../../../store/ThemeController"

const SeparatorLine = styled.div`
    height: 1px;
    width: 60%;
    background-color: ${props => props.themeIsDark === true ? "white" : "black"};
    margin: 0 auto;
    @media screen and (max-width: 750px) {
        width: 70%;
    }
`

export default function Separator() {
    return (
        <SeparatorLine themeIsDark={themeController.themeIsDark()}/>
    )
}