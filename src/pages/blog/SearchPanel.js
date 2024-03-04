import styled from "styled-components";
import "./blog.css"

const Container = styled.div`
    min-height: 100px;
    align-items: center;
    display: flex;
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

const Option = styled.option`
`

export default function SearchSection ({handleSearch, handleSort}) {
    return (
        <Container>
                <input onChange={handleSearch} placeholder={"Поиск..."} className={"search-input"}/>
                <OptionalMenu onChange={handleSort}>
                    <Option value={"any"}>Любой</Option>
                    <Option value={"frontend"}>Frontend</Option>
                    <Option value={"backend"}>Backend</Option>
                </OptionalMenu>
        </Container>
    )
}