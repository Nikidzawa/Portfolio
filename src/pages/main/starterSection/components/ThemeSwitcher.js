import React, {useEffect} from "react";
import styled from "styled-components";
import themeController from "../../../../store/ThemeController";

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
    background-color: ${({themeIsDark}) => (themeIsDark === true ? "black" : "white")};
    border: 2px solid ${({themeIsDark}) => (themeIsDark === true ? " white" : "black")};
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
        transform: translateX(43px);
        background-color: orange;
        box-shadow: none;
        width: 33px;
        height: 33px;
        top: 6px;
        @media screen and (max-width: 600px) {
            transform: translateX(33px);
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
        left: 8px;
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

export default function ThemeSwitcher() {
    const handleKeyDown = (event) => {
        if (event.key === "F1") {
            event.preventDefault();
            themeController.changeTheme();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <ToggleSwitch title={"F1"}>
            <Label themeIsDark={themeController.themeIsDark()}>
                <Input type="checkbox"
                       checked={!themeController.themeIsDark()}
                       onClick={() => themeController.changeTheme()}
                />
                <Slider/>
            </Label>
        </ToggleSwitch>
    );
}