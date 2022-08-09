import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;

    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    >main{
        grid-area: content;
        overflow-y: scroll;

        padding: 64px 0;
    }

    
`;

export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;


    >button:first-child{
    align-self: flex-end;
}



    >h1{
        font-size: 36px;
        font-weight: 500;
        padding-top: 64px;
    }


    >p{
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
    }
`;

