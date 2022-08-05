import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 26px;

    background-color: ${({theme})=> theme.COLORS.ORANGE};
    color: ${({theme})=> theme.COLORS.WHITE};

    border: none;

`;