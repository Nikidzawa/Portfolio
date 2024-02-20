import styled from "styled-components";
import {useEffect, useState} from "react";

const TextContent = styled.div`
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    opacity: ${({ visible }) => (visible ? '1' : '0')};
    transition: opacity 2s ease-in;

    @media (max-width: 700px) {
        margin-top: 100px;
        display: inline-block;
        min-height: 300px;
    }
`

const StarterDiv = styled.div`
    border-bottom: 1px solid azure;

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
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true)
    }, [])

    return (
        <StarterDiv>
            <TextContent visible={isVisible}>
                <Text>Привет, меня зовут <strong>Никита</strong>.</Text>
                <div style={{display: "flex"}}>
                    <Text>Я</Text><Text style={{color: "blue"}}>FullStack</Text>
                </div>
                <Text>разработчик</Text>
            </TextContent>
        </StarterDiv>
    )
}