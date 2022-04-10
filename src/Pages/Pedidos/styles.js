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
    width: 346px;
    height: 354px;
    margin-top: 11px;
`;

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Order = styled.li`
    display: flex;
    justify-content: space-between;
    padding-left: 27px;
    padding-right: 17px;
    align-items: center;
    height: 101px;
    width: 342px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;  
    border: none;
    outline: none;
    margin-bottom: 16px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    gap: 30px;
   

    button {
        display: flex;
        align-items: right;
        background: none;
        border: none;
        cursor: pointer;
            
        &:hover{
            background-color: red;
            box-shadow: red 0px 0px 13px 10px;
            opacity: 0.5;
            } 
    }    

`;
    
export const Paragrafos = styled.p`
    display: flex;
    flex-direction: column;
    padding-top: 13px;
    padding-bottom: 13px;
    gap: 15px;
`;  


