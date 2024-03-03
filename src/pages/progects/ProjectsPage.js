import styled from "styled-components";
import {useEffect, useState} from "react";
import Loader from "../../components/Loading";
import GitHub from "../../API/GitHub";
import ProjectPattern from "./ProjectCard";
import BestRepos from "../../data/BestRepos";

const MainContainer = styled.div`
    min-height: 2000px;
    text-align: center;
    padding: 10px;
`

const Text = styled.h1`
    font-family: sans-serif;
    padding: 15px;
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
        <MainContainer>
            {
                repositories == null ? <Loader/> :
                    <div>
                        <Text>Мои лучшие проекты</Text>
                        <ProjectsGrid>
                            {repositories.filter(project => BestRepos().some(bestRepo => bestRepo.id === project.id)).map(filteredProject => (
                                    <ProjectPattern key={filteredProject.id} repo={filteredProject}/>
                                ))}
                        </ProjectsGrid>
                        <Text>Не менее интересные проекты</Text>
                        <ProjectsGrid>
                            {repositories.filter(project => !BestRepos().some(bestRepo => bestRepo.id === project.id)).map(filteredProject => (
                                <ProjectPattern key={filteredProject.id} repo={filteredProject}/>
                            ))}
                        </ProjectsGrid>
                    </div>
            }
        </MainContainer>
    )
}