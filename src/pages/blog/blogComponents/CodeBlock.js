import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import styled from "styled-components";
import CodeStyle from "./CodeStyle";

const CodeContainer = styled.div`
    display: flex;
    @media screen and (max-width: 600px){
        display: block;
    }
`

export default function SqlSnippet ({children}) {
    const codeString = React.Children.toArray(children).join('\n');
    return (
        <CodeContainer>
            <SyntaxHighlighter language="sql" style={CodeStyle}>{codeString.trim()}</SyntaxHighlighter>
        </CodeContainer>
    );
};