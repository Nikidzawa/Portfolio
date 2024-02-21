import styled from "styled-components";
import {useEffect, useState} from "react";
import "./Components.css"

const TextContent = styled.div`
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;

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
    return (
        <StarterDiv>
            <TextContent>
                <Text>Привет, меня зовут <strong>Никита</strong>.</Text>
                <div style={{display: "flex"}} className="typing-demo">
                    <Text>Я</Text><Text style={{color: "blue"}}>FullStack</Text>
                    <Text>разработчик</Text>
                </div>
            </TextContent>
        </StarterDiv>
    )
}