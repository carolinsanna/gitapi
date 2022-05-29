import React, {useEffect, useState} from 'react';
import * as S from './styled';

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
        </S.Container>
    )
}

export default Repos;