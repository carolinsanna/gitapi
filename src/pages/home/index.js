import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';

function App(props) {
  function handleSearch(){
    axios.get(`https://api.github.com/users/${user}/repos`).then(response => {
      const repos = response.data;
      const reposName = [];
      repos.map((repository) => {
        reposName.push(repository.name);
      });
      localStorage.setItem('reposName', JSON.stringify(reposName));
    });
  }
  const [user, setUser] = useState('');
  return (
    <S.Container>
      <S.Input className='userInput' placeholder='User' value={user} onChange={e => setUser(e.target.value)}/>
      <S.Button type='button' onClick={handleSearch}>Search</S.Button>
    </S.Container>
  );
}

export default App;