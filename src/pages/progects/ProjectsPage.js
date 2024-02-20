import styled from "styled-components";
import ProjectPattern from "./ProjectPattern";
import GetProjects from "../../data/projects";

const ProjectsGrid = styled.div `
    min-height: 1000px;
    padding: 50px;
    display: grid;
    grid-gap: 30px 50px;
    grid-template-columns: auto auto;
    justify-content: center;
    @media (max-width: 700px) {
        grid-template-columns: auto;
    }
`

export default function ProjectsPage () {
    return (
        <ProjectsGrid>
            {GetProjects().map(progect => <ProjectPattern project={progect}/>)}
        </ProjectsGrid>
    )
}