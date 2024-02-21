import styled from "styled-components";

const LoaderWrapper = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
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
        </LoaderWrapper>
    )
}