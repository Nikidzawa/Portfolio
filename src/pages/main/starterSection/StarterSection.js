import styled from "styled-components";

const TextContent = styled.div`
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    @media screen and (max-width: 600px) {
        min-height: 350px;
    }
`

const TypingContainer = styled.div`
    display: flex; 
    justify-content: center;
`

const Typing = styled.div`
    color: #fff;
    overflow: hidden;
    border-right: .20em solid white;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation: typing 2.5s steps(35, end), blink-caret .5s step-end infinite;

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: white }
    }
`

const StarterDiv = styled.div`
    border-bottom: 1px solid azure;
`

const Text = styled.span`
    font-family: sans-serif;
    font-size: 40px;
    padding-bottom: 10px;
    @media screen and (max-width: 600px) {
        font-size: 35px;
    }

    @media screen and (max-width: 500px) {
        font-size: 25px;
    }
`

export default function StarterSection () {
    return (
        <StarterDiv>
            <TextContent>
                <Text>Привет👋</Text>
                <Text>меня зовут <strong>Никита</strong>,</Text>
                <TypingContainer>
                    <Typing><Text>Я</Text><Text style={{color: "blue"}}> FullStack </Text><Text>разработчик.</Text></Typing>
                </TypingContainer>
            </TextContent>
        </StarterDiv>
    )
}