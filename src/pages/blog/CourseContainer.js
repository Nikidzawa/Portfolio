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
`

const TextContainer = styled.div`
    flex: 1;
    overflow: hidden;
`

const Image = styled.img`
    width: 70px;
    height: 70px;
    margin-right: 15px;
`

const ButtonInformationContainer = styled.div`
    display: flex;
    align-items: center;
`

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
`
export default function CourseContainer({ course_data }) {
    const navigate = useNavigate();
    function redirectToCoursePage() {
        navigate(`./courses/${course_data.url}`);
    }
    function getProgressStatus () {
        const articles_read = localStorage.getItem("articles_read")
        if (articles_read) {
            const readArticlesInCourse = course_data.pages.filter(page => articles_read.includes(page.url));
            const progress = readArticlesInCourse.length;
            const length = course_data.pages.length;
            return (parseInt(progress) / length) * 100;
        } else return 0;
    }

    return (
        <Container onClick={redirectToCoursePage}>
            <TextContainer>
                <ButtonInformationContainer>
                    <div><Image src={course_data.img}/></div>
                    <div>
                        <BlogName style={{margin: "0", marginRight: "auto"}}>{course_data.title}</BlogName>
                        <p>Курс</p>
                    </div>
                </ButtonInformationContainer>
                <div><DescriptionText>{course_data.description}</DescriptionText></div>
                <progress style={{width: "100%"}} value={getProgressStatus()} max="100"></progress>
            </TextContainer>
        </Container>
    );
}