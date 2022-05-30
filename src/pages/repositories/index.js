import React, {useEffect, useState} from 'react';
import * as S from './styled';
import {useNavigate} from 'react-router-dom';

function Repos(){
    const navigate = useNavigate();
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        let reposName = localStorage.getItem('reposName');
        if(reposName != null){
            reposName = JSON.parse(reposName);
            setRepos(reposName);
            localStorage.clear();
        } else {
            navigate('/');
        }
    }, []);

    return(
        <S.Container>    
            <S.Title>
                Repositories
            </S.Title>
            <S.List>
                {   repos.map(repos => {
                    return(
                    <S.ListItem>{repos}</S.ListItem>
                    )
                    })
                }
            </S.List>
            <S.LinkHome to='/'>Back</S.LinkHome> 
        </S.Container>
    )
}

export default Repos;