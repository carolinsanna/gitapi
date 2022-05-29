import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
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