import GO_BACK_IMG from "./goBack.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BlogHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const HeaderTitle = styled.h1`
    margin: 0;
    text-align: center;
    flex: 1;
`;

export default function BasicBlogWindow({ children, name }) {
    const navigate = useNavigate();

    function returnToBlogPage() {
        navigate("/blog");
    }

    return (
        <main className={"main-container"}>
            <BlogHeader>
                <img
                    onClick={returnToBlogPage}
                    style={{ cursor: "pointer" }}
                    src={GO_BACK_IMG}
                    width={"35px"}
                    height={"35px"}
                />
                <HeaderTitle>{name}</HeaderTitle>
            </BlogHeader>
            {children}
        </main>
    );
}