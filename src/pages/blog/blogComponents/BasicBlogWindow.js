import GO_BACK_IMG from "./goBack.png";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const BlogHeader = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderTitle = styled.h1`
    margin: 0;
    text-align: center;
    flex: 1;
`;

const Image = styled.img`
    cursor: pointer;
    width: 35px;
    height: 35px;
    @media screen and (max-width: 600px) {
        display: none;
    }
`

export default function BasicBlogWindow({ children, name }) {
    const navigate = useNavigate();

    function returnToBlogPage() {
        navigate(-1);
    }

    return (
        <main className={"main-container"}>
            <BlogHeader>
                <Image
                    onClick={returnToBlogPage}
                    src={GO_BACK_IMG}
                />
                <HeaderTitle>{name}</HeaderTitle>
            </BlogHeader>
            {children}
        </main>
    );
}