import styled from 'styled-components';

export const ButtonContainer = styled.button` 
    padding: 20px;
    border: 2px solid #7C0EA3;
    border-radius: 2px;
    background-color: #0e0e0e;
    color: #7C0EA3;
    font-size: 24px;
    font-weight: 700;
    flex: 1;

    &:hover {
        border: 2px solid #0e0e0e;
        color: #0e0e0e;
        background-color: #7C0EA3;
        cursor: pointer;
    }
`