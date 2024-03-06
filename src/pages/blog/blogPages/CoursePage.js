import ArticleContainer from "../ArticleContainer";
import {useParams} from "react-router-dom";
import GetBlogs from "../../../data/GetBlogs";
import styled from "styled-components";
import BasicBlogWindow from "../blogComponents/BasicBlogWindow";


const CoursesContainer = styled.div`
    display: grid;
    padding-top: 10px;
    grid-gap: 20px;
`
export default function CoursePage() {
    const { course_url } = useParams();
    const course = GetBlogs().find(blog => blog.url === course_url);

    return (
        !course ? <h1>Ничего нет</h1> :
            <BasicBlogWindow name={course.title}>
                <div style={{textAlign: "center", padding: "20px"}}>
                    <p>{course.description}</p>
                </div>
                <CoursesContainer>
                    {course.pages.map(page => (
                        <ArticleContainer article_data={page} key={page.url} to={`/blog/course/${course_url}/${page.url}`}>
                            <div>
                                <h2>{page.title}</h2>
                                <p>{page.description}</p>
                            </div>
                        </ArticleContainer>
                    ))}
                </CoursesContainer>
            </BasicBlogWindow>
    )
}