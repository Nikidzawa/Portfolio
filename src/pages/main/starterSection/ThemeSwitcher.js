import React, { useState } from "react";
import styled from "styled-components";

const ToggleSwitch = styled.div`
    position: relative;
    width: 90px;
    
    @media screen and (max-width: 600px){
        width: 70px;
    }
`;

const Label = styled.label`
    position: absolute;
    width: 100%;
    height: 45px;
    background-color: ${({ theme }) => (theme === "dark" ? "black" : "white")};
    border: 2px solid ${({ theme }) => (theme === "dark" ? " white" : "black")};
    border-radius: 50px;
    cursor: pointer;
    @media screen and (max-width: 600px){
        height: 32px;
    }
`;

const Input = styled.input`
    position: absolute;
    display: none;

    &:checked + span {
        background-color: white;
    }

    &:checked + span::before {
        transform: translateX(42px);
        background-color: orange;
        box-shadow: none;
        width: 32px;
        height: 32px;
        @media screen and (max-width: 600px) {
            transform: translateX(30px);
            width: 25px;
            height: 25px;
            top: 3px;
        }
    }
`;

const Slider = styled.span`
    position: absolute;
     width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: 0.3s;

    &::before {
        content: "";
        position: absolute;
        top: 7px;
        left: 9px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        box-shadow: inset 10px -4px 0 0 white;
        background-color: black;
        transition: 0.3s;
        @media screen and (max-width: 600px) {
            width: 23px;
            height: 23px;
            top: 5px;
        }
    }
`;

export default function ThemeSwitcher({theme, setTheme}) {

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <ToggleSwitch>
            <Label theme={theme}>
                <Input type="checkbox" checked={theme === "light"} onChange={toggleTheme}/>
                <Slider/>
            </Label>
        </ToggleSwitch>
    );
}
