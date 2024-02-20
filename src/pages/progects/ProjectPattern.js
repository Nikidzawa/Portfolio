import styled from "styled-components";
import {useEffect, useState} from "react";

const Pattern = styled.div`
    padding: 20px;
    border: white 1px solid;
    position: relative;
    border-radius: 20px;
    height: 350px;
    width: 250px;
    cursor: pointer;
    overflow: hidden; 
    transition: transform 0.3s ease;
    transition: opacity 0.8s ease-in;
    
    opacity: ${({ visible }) => (visible ? '1' : '0')};

    &:hover {
        transform: scale(1.05);
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    height: 100%;
`

const Image = styled.img`
    margin-top: 50px;
    width: 210px;
    height: 210px;
    transition: transform 0.4s ease; 

    ${Pattern}:hover & {
        transform: scale(1.2);
    }
`

const Title = styled.p`
    font-family: sans-serif;
    border-top: white 1px solid;
    font-size: 18px;
    padding: 10px;
`

export default function ProjectPattern ({project}) {
    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        setVisible(true)
    }, [])

    return (
        <Pattern visible={isVisible}>
            <Content>
                <Image src={project.img} alt="Logo"/>
                <Title>{project.title}</Title>
            </Content>
        </Pattern>
    )
}