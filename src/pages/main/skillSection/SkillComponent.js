import styled from "styled-components";
import {useEffect, useState} from "react";

const Title = styled.span`
    font-size: 20px;
    padding: 10px;
    font-family: sans-serif;
    
    @media (max-width: 500px) {
        font-size: 17px;
    }
`
const SkillItem = styled.li`
    padding: 10px;
    display: flex;
    opacity: ${({ visible }) => (visible ? '1' : '0')};
    transition: opacity 0.8s ease; 
`;

export default function SkillComponent ({skill}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <SkillItem visible={isVisible}>
            <img width="50px" height="50px" src={skill.img} alt={skill.title} />
            <Title>{skill.title}</Title>
        </SkillItem>
    );
}