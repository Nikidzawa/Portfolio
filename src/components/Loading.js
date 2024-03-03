import styled from "styled-components";

const LoaderWrapper = styled.div`
    width: 150px;
    justify-content: center;
    height: 100px;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-40%) translateY(-50%);
    text-align: center;
`

const LoaderCircle = styled.div`
    position: absolute;
    
    border: 4px solid white;
    border-top: 4px solid transparent;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export default function Loading () {
    return (
        <LoaderWrapper>
            <LoaderCircle/>
            <p style={{marginTop: "70px"}}>Получаем данные от GitHub...</p>
        </LoaderWrapper>

    )
}