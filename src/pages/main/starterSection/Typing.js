import styled, {keyframes} from "styled-components";

const typing = keyframes`
    from { width: 0 }
    to { width: 100% }
`;

const blinkCaret = props => keyframes`
    from, to { border-color: transparent }
    50% { border-color: ${props.theme === "dark" ? "white" : "black"}; }
`;

const Typing = styled.div`
    overflow: hidden;
    border-right: 0.20em solid ${props => props.theme === "dark" ? "white" : "black"};
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em;
    animation: ${typing} 2.5s steps(35, end), ${blinkCaret} 0.5s step-end infinite;
`;

export default Typing;