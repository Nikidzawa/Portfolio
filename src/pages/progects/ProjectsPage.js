import styled from "styled-components";
import {useEffect, useState} from "react";
import GitHub from "../../API/GitHub";

const Text = styled.h1`
    font-family: sans-serif;
    padding: 10px;
    @media screen and (max-width: 600px) {
        padding: 0;
    }
`

const ProjectsGrid = styled.div `
    padding: 50px;
    display: grid;
    grid-gap: 30px 50px;
    grid-template-columns: auto auto auto;
    justify-content: center;
    
    @media screen and (max-width: 1200px) {
        grid-template-columns: auto auto;
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: auto;
    }
`

export default function ProjectsPage () {
    const [repositories, setRepositories] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            const repos = await GitHub.getRepos();
            setRepositories(repos);
        };
        fetchRepos();
    }, []);

    return (
        <main className={"main-container"} style={{textAlign: "center"}}>

        </main>
    )
}