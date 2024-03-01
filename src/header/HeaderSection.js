import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1200px;
`

const HeaderRow = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 30px;
    row-gap: 20px;
    flex-wrap: wrap;
    @media screen and (max-width: 700px) {
        row-gap: 0;
        justify-content: start;
    }
`

const SiteName = styled.p`
    font-size: 26px;
    margin-right: auto;
    font-family: sans-serif;
`


const Options = styled.ul`
    display: flex;
    flex-wrap: wrap;
    font-family: sans-serif;
    align-items: center;
    cursor: pointer;
    column-gap: 40px;
    
    @media screen and (max-width: 700px) {
        column-gap: 30px;
        padding-left: 0;
        margin-left: 0;
    }
`

const Optional = styled(Link) `
    font-size: 20px;
    text-decoration: none;
    color: inherit;
    position: relative;

    &:hover {
        opacity: 0.7;
        transition: opacity 0.2s ease-in;
    }

    &.active::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: blue;
    }

    &:hover::after {
        background-color: darkblue;
        transition: background-color 0.2s ease-in;
    }
    
    
    &::after {
        background-color: blue;
        transition: background-color 0.2s ease-in;
    }
    
    &:not(:hover) {
        opacity: 1;
        transition: opacity 0.2s ease-in;
    }
`

export default function HeaderSection () {
    const location = useLocation();
    const [buttonSelected, setButton] = useState("home");

    useEffect(() => {
        if (location.pathname.includes("/home")) {
            setButton("home");
        } else if (location.pathname.includes("/projects")) {
            setButton("projects");
        } else if (location.pathname.includes("/blog")){
            setButton("blog");
        }
    }, [location.pathname]);

    return (
        <header className="header">
            <HeaderContainer>
                <HeaderRow>
                    <SiteName>NIKIDZAWA.RU</SiteName>
                    <Options>
                        <Optional to={"/home"} className={buttonSelected === "home" ? "active" : ""}>HOME</Optional>
                        <Optional to={"/projects"} className={buttonSelected === "projects" ? "active" : ""}>PROJECTS</Optional>
                        <Optional to={"/blog"} className={buttonSelected === "blog" ? "active" : ""}>MY BLOG</Optional>
                    </Options>
                </HeaderRow>
            </HeaderContainer>
        </header>
    )
}