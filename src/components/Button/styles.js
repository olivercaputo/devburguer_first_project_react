import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856'};
    margin-top: 34px;
    margin-bottom: 51px;
    color:#FFFFFF;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    &:hover{
        opacity: 0.7;
    }

    &:active{
        opacity: 0.5;
    }
`;