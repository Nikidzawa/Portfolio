import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
    cursor: pointer;
    display: flex;
    padding: 20px;
    min-height: 150px;
    border: 1px solid white;
    border-radius: 30px;
    box-sizing: border-box;
    overflow: hidden;
`;

const TextContainer = styled.div`
    flex: 1;
    overflow: hidden;
`;

const Image = styled.img`
    width: 70px;
    height: 70px;
    margin-right: 15px;
`;

const ButtonInformationContainer = styled.div`
    display: flex;
    align-items: center;
`;

const BlogName = styled.h1`
    margin: 0 auto 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (max-width: 600px){
        font-size: 22px;
    }
`

const DescriptionText = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
`;
function getLevel(level) {
    let text;
    let color;

    switch (level) {
        case 0:
            text = "Легкий";
            color = "green";
            break;
        case 1:
            text = "Средний";
            color = "yellow";
            break;
        case 2:
            text = "Сложный";
            color = "red";
            break;
        default:
            text = "";
            color = "black";
    }

    return (
        <div style={{ display: "flex", alignItems: "center"}}>
            <div style={{ width: "10px", height: "10px", backgroundColor: color, borderRadius: "50%", marginRight: "5px" }} />
            <p>{text}</p>
        </div>
    );
}
export default function BlogContainer({ article_data }) {
    const navigate = useNavigate();

    function redirectToArticlePage() {
        navigate(`/blog/${article_data.url}`);
    }

    return (
        <Container onClick={redirectToArticlePage}>
            <TextContainer>
                <ButtonInformationContainer>
                    <div><Image src={article_data.img}/></div>
                    <BlogName style={{margin: "0", marginRight: "auto"}}>{article_data.title}</BlogName>
                    {getLevel(article_data.level)}
                </ButtonInformationContainer>
                <div><DescriptionText>{article_data.description}</DescriptionText></div>
            </TextContainer>
        </Container>
    );
}