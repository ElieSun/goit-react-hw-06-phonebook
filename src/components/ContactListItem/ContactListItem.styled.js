import styled from 'styled-components'

export const Item = styled.li`
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    flex-direction: row; 
    flex-wrap: nowrap; 
    align-content: center;
    width: 300px;
    margin: 10px 0px;
    min-height: 30px;
`;

export const Button = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 5px 6px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`;