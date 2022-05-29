import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 800px;    
    font-family: sans-serif;
`

export const Title = styled.h1`
    font-size: 2 rem;
    color: #333;
    text-align: center;
`

export const List = styled.ul`
    list-style: nome;
    padding: 0;
    margin: 0;

`
export const ListItem = styled.li`
    margin: .25rem 0;
    background: #000;
    color: #fff;
    border-radius: 0.25rem;
    padding: .5rem;
`
export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    padding: .5rem 0;
    color: #fff;
    text-decoration: none;
    border-radius: 0.25rem;
`
