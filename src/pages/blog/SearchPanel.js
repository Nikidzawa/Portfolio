import styled from "styled-components";
import "./blog.css"

const Container = styled.div`
    display: flex;
    padding-top: 10px;
`
const OptionalMenu = styled.select`
    margin-left: auto;
    width: 200px;
    font-size: 18px;
    background-color: black;
    text-align: center;


    outline: none;
    
    color: white;
    @media screen and (max-width: 450px) {
        width: 100px;
    }
`

export default function SearchSection ({handleSearch, handleSort}) {
    return (
        <Container>
                <input onChange={handleSearch} placeholder={"Поиск..."} className={"search-input"}/>
                <OptionalMenu onChange={handleSort}>
                    <option value={"any"}>Любой</option>
                    <option value={"frontend"}>Frontend</option>
                    <option value={"backend"}>Backend</option>
                </OptionalMenu>
        </Container>
    )
}