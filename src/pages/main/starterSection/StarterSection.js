import styled from "styled-components";

const TextContent = styled.div`
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    @media screen and (max-width: 600px) {
        min-height: 450px;
    }
`

const Typing = styled.div`
    width: 34ch;
    animation: typing 2s steps(22), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
    @media screen and (max-width: 600px) {
        width: 26.5ch;
    }
    @media screen and (max-width: 400px) {
        width: 22.5ch;
    }
}

@keyframes typing {
    from {
        width: 0
    }
}

@keyframes blink {
    50% {
        border-color: transparent
    }
`

const StarterDiv = styled.div`
    border-bottom: 1px solid azure;
`

const Text = styled.span`
    font-family: sans-serif;
    font-size: 40px;
    padding: 10px;
    @media screen and (max-width: 600px) {
        font-size: 30px;
    }

    @media screen and (max-width: 400px) {
        font-size: 25px;
    }
`

export default function StarterSection () {
    return (
        <StarterDiv>
            <TextContent>
                <Text>Привет👋</Text>
                <Text>меня зовут <strong>Никита</strong>.</Text>
                <Typing><Text>Я</Text><Text style={{color: "blue"}}>FullStack</Text><Text>разработчик</Text></Typing>
            </TextContent>
        </StarterDiv>
    )
}