import styled from "styled-components";

const SeparatorLine = styled.div`
    height: 1px;
    width: 60%;
    background-color: white;
    margin: 0 auto;
    @media screen and (max-width: 750px) {
        margin: 0 auto;
    }
`

export default function Separator () {
    return (
        <SeparatorLine/>
    )
}