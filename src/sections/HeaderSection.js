import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import styled from "styled-components";
import SITE_LOGO from "./Icon.png"
import MobileDetect from "mobile-detect";

const HeaderContainer = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1200px;
`

const HeaderRow = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 12px;
    row-gap: 20px;
    flex-wrap: wrap;
    @media screen and (max-width: 800px) {
        row-gap: 0;
        justify-content: start;
    }
`
const SiteImage = styled.img`
    width: 35px;
    height: 35px;
    @media screen and (max-width: 390px) {
        width: 32px;
        height: 32px;
    }
`
const SiteName = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-size: 26px;
    margin-right: auto;
    font-family: sans-serif;

    &::after {
        content: attr(data-after);
        display: inline-block;
        color: blue;
    }

    @media screen and (max-width: 390px) {
        font-size: 23px;
    }
`

const Options = styled.ul`
    display: flex;
    flex-wrap: wrap;
    font-family: sans-serif;
    align-items: center;
    cursor: pointer;
    column-gap: 40px;
    
    @media screen and (max-width: 800px) {
        padding-left: 0;
        margin-left: 0;
        padding-top: 5px;
    }
`

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();
const Optional = styled(Link) `
    font-size: 20px;
    text-decoration: none;
    color: inherit;
    position: relative;

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

    &:not(${!isMobile}) {
        &:hover::after {
            background-color: darkblue;
            transition: background-color 0.2s ease-in;
        }

        &::after {
            background-color: blue;
            transition: background-color 0.2s ease-in;
        }
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
        } else if (location.pathname.includes("/blog")) {
            setButton("blog");
        }
    }, [location.pathname]);

    return (
        <header className="header">
            <HeaderContainer>
                <HeaderRow>
                    <SiteImage src={SITE_LOGO}/>
                    <SiteName to={"/home"} data-after={buttonSelected === "blog" ? "BLOG" : "PORTFOLIO"}>NIKIDZAWA.</SiteName>
                    <Options>
                        <Optional to={"/home"} className={buttonSelected === "home" ? "active" : ""}>HOME</Optional>
                        <Optional to={"/projects"} className={buttonSelected === "projects" ? "active" : ""}>PROJECTS</Optional>
                        <Optional to={"/blog"} className={buttonSelected === "blog" ? "active" : ""}>BLOG</Optional>
                    </Options>
                </HeaderRow>
            </HeaderContainer>
        </header>
    )
}