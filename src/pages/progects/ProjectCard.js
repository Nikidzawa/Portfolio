import styled from "styled-components";
import {useEffect, useState} from "react";
import GitHub from "../../API/GitHub";
import Loading from "../../Components/Loading";
import React from "react";

const Card = styled.div`
    padding: 20px;
    border: white 1px solid;
    border-radius: 20px;
    height: 350px;
    width: 250px;
    cursor: pointer;
    overflow: hidden; 
    transition: transform 0.3s ease;
    position: relative;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    &:hover {
        transform: scale(1.05);
    }
`
const StyledAnchor = styled.a`
    /* Ваши собственные стили */
    text-decoration: none; /* Убираем подчеркивание ссылки */
    color: inherit; /* Наследуем цвет текста от родительского элемента */
    /* Другие стили по желанию */
`;

const Image = styled.img`
    padding: 10px;
    width: 210px;
    height: 210px;
    transition: transform 0.4s ease; 

    ${Card}:hover & {
        transform: scale(1.2);
    }
`
const LoadingContainer = styled.div`
    position: relative;
    width: 210px;
    height: 210px;
`

const Title = styled.p`
    font-family: sans-serif;
    border-top: white 1px solid;
    font-size: 18px;
    padding: 10px;
`

const Content = styled.div`
    flex-grow: 1;
    height: 0;
    text-align: center;
`

const Topics = styled.div`
    margin-top: auto;
`

export default function ProjectCard ({repo}) {
    const [image, setImage] = useState(null);

    useEffect(() => {
        getImage();
    }, []);

    async function getImage() {
        const imageName = await GitHub.getImage(repo.name);
        setImage(imageName);
    }


    return (
        <StyledAnchor href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <Card>
                <Content>
                    {image === null ?
                        <LoadingContainer>
                            <Loading/>
                        </LoadingContainer> : <Image src={image} alt="Logo"/>}
                    <Title>{repo.description}</Title>
                </Content>
                <Topics>
                    {repo.topics.map((topic, index) =>
                        <React.Fragment key={topic}>
                            <span style={{color: "#99CCFF"}}>#{topic}</span>
                            {index < repo.topics.length - 1 && `, `}
                        </React.Fragment>
                    )}
                </Topics>
            </Card>
        </StyledAnchor>
    )
}