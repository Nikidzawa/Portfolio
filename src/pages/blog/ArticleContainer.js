import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled(Link)`
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    display: flex;
    padding: 20px;
    min-height: 150px;
    border: 1px solid white;
    border-radius: 30px;
    box-sizing: border-box;
    overflow: hidden;
    opacity: ${({ read }) => (read ? '0.75' : '1')}
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
    marginRight: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (max-width: 600px) {
        font-size: 22px;
    }
`

const TitleAndDifficultContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    @media screen and (max-width: 600px) {
        display: block;
    }
`


const DescriptionText = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
`;

const LevelContainer = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
`;

const InformationContainer = styled.div`
    display: flex;
    
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
        <LevelContainer>
            <div style={{ width: "10px", height: "10px", backgroundColor: color, borderRadius: "50%", marginRight: "5px" }} />
            <p>{text}</p>
        </LevelContainer>
    );
}

function saveProgress ({article_data}) {
    const progress = localStorage.getItem("articles_read");
    localStorage.setItem("articles_read", progress + "," + article_data.url);
}

function checkStatus(url) {
    const articles_read = localStorage.getItem("articles_read");
    if (articles_read) {
        return articles_read.includes(url);
    } else {
        return false;
    }
}
export default function ArticleContainer({ article_data}) {
    const isRead = checkStatus(article_data.url);

    return (
        <Container read={isRead} onClick={() => saveProgress({ article_data })} to={`./${article_data.url}`}>
            <TextContainer>
                <ButtonInformationContainer>
                    <Image src={article_data.img}/>
                    <TitleAndDifficultContainer>
                        <div style={{flex: "1"}}>
                            <BlogName>{article_data.title}</BlogName>
                            <InformationContainer>
                                <p>Статья</p>
                                {getLevel(article_data.level)}
                            </InformationContainer>
                        </div>
                    </TitleAndDifficultContainer>
                </ButtonInformationContainer>
                <div><DescriptionText>{article_data.description}</DescriptionText></div>
            </TextContainer>
        </Container>
    );
}