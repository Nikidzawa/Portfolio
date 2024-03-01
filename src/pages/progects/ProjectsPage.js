import styled from "styled-components";
import {useEffect, useState} from "react";
import Loader from "../../Components/Loading";
import GitHub from "../../API/GitHub";
import ProjectPattern from "./ProjectPattern";

const ProjectsGrid = styled.div `
    min-height: 1000px;
    padding: 50px;
    display: grid;
    grid-gap: 30px 50px;
    grid-template-columns: auto auto auto;
    justify-content: center;
    
    @media (max-width: 1200px) {
        grid-template-columns: auto auto;
    }
    @media (max-width: 700px) {
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
        <ProjectsGrid>
            {repositories === null ? <Loader/> : repositories.map(project => <ProjectPattern key={project.id} repo={project}/>)}
        </ProjectsGrid>
    )
}