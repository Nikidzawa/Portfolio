import styled from "styled-components";
import "./blog.css"

const SearchBackGround = styled.div`
    margin-right: auto;
`


export default function SearchPanel () {
    return (
        <SearchBackGround>
            <input placeholder={"Поиск..."} className={"search-input"}/>
        </SearchBackGround>
    )
}