import styled from "styled-components";
import {useEffect, useState} from "react";

const SkillItem = styled.li`
    display: flex;
    opacity: ${({ visible }) => (visible ? '1' : '0')};
    align-items: center;
    gap: 10px;

    font-size: 20px;
    transition: font-size 0.4s ease, opacity 0.8s ease;
    
    img {
        width: 50px;
        height: 50px;
        transition: width 0.4s ease, height 0.4s ease;
    }
`;

export default function SkillComponent ({skill}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <SkillItem visible={isVisible}>
            <img src={skill.img} alt={skill.title} />
            <div>{skill.title}</div>
        </SkillItem>
    );
}