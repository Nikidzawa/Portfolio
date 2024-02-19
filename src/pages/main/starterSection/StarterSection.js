import styled from "styled-components";

const CenteredDiv = styled.div`
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border-bottom: 1px solid azure;
    
    @media (max-width: 700px) {
        margin-top: 100px;
        display: inline-block;
        min-height: 300px;
    }
`

const Text = styled.div`
    font-family: sans-serif;
    font-size: 40px;
    padding: 10px;
    
    @media (max-width: 700px) {
        font-size: 32px;
        padding: 5px;
    }
`

export default function StarterSection () {
    return (
        <CenteredDiv>
            <Text>Привет, меня зовут <strong>Никита</strong>.</Text>
            <div style={{display: "flex"}}>
                <Text>Я</Text><Text style={{color: "blue"}}>FullStack</Text>
            </div>
            <Text>разработчик</Text>
        </CenteredDiv>
    )
}