import styled from 'styled-components';

import Background from '../../assets/background1.svg';

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img`
    width: 342px;
    height: 354px;
    margin-top: 11px;
`;

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputLabel = styled.p`
    //display: flex;
    //flex-direction: row;
    //justify-content: left;
    text-align: left;   
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #EEEEEE;
    margin-left: 25px;
`;

export const Input = styled.input`
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;  
    border: none;
    outline: none;
    margin-bottom: 42px;
    padding: 15px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: #FFFFFF;
`;

