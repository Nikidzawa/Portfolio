import styled from "styled-components";
import GetBlogs from "../../data/GetBlogs";
import ArticleContainer from "./ArticleContainer";
import SearchSection from "./SearchPanel";
import {useEffect, useMemo, useState} from "react";
import CourseContainer from "./CourseContainer";

const BlogsList = styled.div`
    display: grid;
    grid-gap: 30px;
    padding-top: 40px;
`

export default function BlogPage () {
    const [search, setSearch] = useState("");
    const [posts, setPosts] = useState([]);
    const [selectedSort, setSelectedSort] = useState("any")

    useEffect(() => {
        const fetchedPosts = GetBlogs();
        setPosts(fetchedPosts);
    }, [])

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleSort = (event) => {
        setSelectedSort(event.target.value);
    };

    const sortedAndSearchedPosts = useMemo(() => {
        const filteredPosts = posts.filter(post =>
            post.title.toLowerCase().includes(search.toLowerCase())
        );
        return selectedSort === "any" ? filteredPosts : filteredPosts.filter(post => post.theme === selectedSort);
    }, [search, selectedSort, posts]);

    return (
        <main className={'main-container'}>
            <SearchSection handleSearch={handleSearch} handleSort={handleSort} />
            <BlogsList>
                {sortedAndSearchedPosts.map(post =>
                    post.type === "article" ?
                        <ArticleContainer article_data={post} key={post.url} /> :
                        <CourseContainer course_data={post} key={post.url}/>)
                }
            </BlogsList>
        </main>
    );
}