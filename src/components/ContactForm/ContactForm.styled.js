import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    justify-content: center; 
    align-items: flex-start; 
    /* flex-flow: column nowrap; */ 
    flex-direction: column; 
    flex-wrap: nowrap; 
    align-content: center;
    width: 300px;
    margin-bottom: 30px;
`;

export const FormLine = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: flex-start; 
    flex-direction: column; 
    flex-wrap: nowrap; 
    align-content: flex-start;
`;

export const FormLabel = styled.label`
    color: #ffffff;
    padding: 8px;
    margin: 0;
    padding: 0;
`;

export const FormInput = styled.input`
    width: 300px;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const FormButton = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 20px;
`;