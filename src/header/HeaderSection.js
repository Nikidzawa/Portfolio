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
    @media (max-width: 700px) {
        row-gap: 0;
        justify-content: start;
    }
`

const SiteName = styled.p`
    font-size: 25px;
    margin-right: auto;
    font-family: sans-serif;
`

const Options = styled.ul`
    display: flex;
    flex-wrap: wrap;
    font-family: sans-serif;
    align-items: center;
    column-gap: 40px;
    @media (max-width: 700px) {
        column-gap: 20px;
        padding-left: 0;
        margin-left: 0;
    }
`

const Optional = styled(Link) `
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
`

export default function HeaderSection () {
    const location = useLocation();
    const [buttonSelected, setButton] = useState("home");

    useEffect(() => {
        if (location.pathname.includes("/home")) {
            setButton("home");
        } else if (location.pathname.includes("/projects")) {
            setButton("projects");
        } else if (location.pathname.includes("/contacts")){
            setButton("contacts");
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
                        <Optional to={"/contacts"} className={buttonSelected === "contacts" ? "active" : ""}>CONTACTS</Optional>
                    </Options>
                </HeaderRow>
            </HeaderContainer>
        </header>
    )
}