import styled from "styled-components";
import SearchPanel from "./SearchPanel";
import GetBlogs from "../../data/GetBlogs";


const BlogContainer = styled.div`
    min-height: 2000px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`

const Blog = styled.div`
    min-height: 100px;
    align-items: center;
    display: flex;
`
export default function BlogPage () {
    return (
        <BlogContainer>
            <Blog>
                <SearchPanel/>
            </Blog>
            {GetBlogs().length === 0 ? <p>Пока ничего нет</p> : <p>Что-то есть</p>}
        </BlogContainer>
    )
}