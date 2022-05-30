import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: sans-serif;
`

export const Content = styled.div`
    width: 100vw;    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: .5rem 0 0 .5rem;
    height: 2rem;
    padding: 0 .5rem;    
    &:focus,
    &:active{
        outline: none;
        box-shadow:none;
    }
`
export const Button = styled.button`
    border: 1px solid #000;
    height: 2rem;
    border-radius: 0 .5rem .5rem 0;
    background: #000;
    color: #fff;
`

export const Error = styled.span`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;    
`

export const Success = styled.span`
    display: block;
    font-size: 0.65rem;
    color: green;
    font-weight: 600;
    margin-top: 1rem;
`