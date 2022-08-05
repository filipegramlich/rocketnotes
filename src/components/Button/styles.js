import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;
    padding:0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;
    border: none;

    background-color: ${({theme})=> theme.COLORS.ORANGE};
    color: ${({theme})=> theme.COLORS.WHITE};

    &:disabled{
        opacity: 0.5;
    }

`;