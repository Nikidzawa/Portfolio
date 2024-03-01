import styled from "styled-components";
import "./Components.css"

const TextContent = styled.div`
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    
    @media screen and (max-width: 600px) {
    }
`

const StarterDiv = styled.div`
    border-bottom: 1px solid azure;
`

const Text = styled.div`
    font-family: sans-serif;
    font-size: 40px;
    padding: 10px;
    @media screen and (max-width: 600px) {
        font-size: 30px;
    }
`

export default function StarterSection () {
    return (
        <StarterDiv>
            <TextContent>
                <Text>Привет👋</Text>
                <Text>меня зовут <strong>Никита</strong>.</Text>
                <div style={{display: "flex"}} className="typing">
                    <Text>Я</Text><Text style={{color: "blue"}}>FullStack</Text>
                    <Text>разработчик</Text>
                </div>
            </TextContent>
        </StarterDiv>
    )
}