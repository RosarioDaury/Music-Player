import styled from "styled-components";

export const DivSideBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid black;
    height: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    padding: 2rem 2rem;
    font-weight: lighter;

    &::-webkit-scrollbar{
        background-color: rgba(96, 96, 96, 0.3);
        border-radius: 20px;
        width: 10px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: rgba(58, 194, 63, 0.6);
        border-radius: 20px;
    }

    p{
        margin: 3px 0;
    }

    h2{
        margin: 10px 0;
        font-weight: lighter;
        color: green;
    }
`

