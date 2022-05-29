import React, {useEffect, useState} from 'react';
import * as S from './styled';
import {Link} from 'react-router-dom';

function Repos(){
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        let reposName = localStorage.getItem('reposName');
        reposName = JSON.parse(reposName);
        setRepos(reposName);
        localStorage.clear();
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