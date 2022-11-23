import styled from 'styled-components';

export const InputContainer = styled.div`
    height: 100px;   
    background-color: #0e0e0e;
    margin: 20px;
    border-radius: 10px;  
    display: flex;
    align-items: center;
    justify-content: flex-end; 

    input {
        width: 100%;
        height: 50px;
        background-color: #0e0e0e;
        border: 0;
        padding: 0 10px;
        text-align: end;
        font-size: 32px;
        font-weight: 500;
        color: #7C0EA3;

        &::selection {
            background-color: #7C0EA3;
            color: #0e0e0e;
        }
    }
`