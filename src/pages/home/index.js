import React, {useState} from 'react';
import axios from 'axios';

function App(props) {
  function handleSearch(){
    axios.get(`https://api.github.com/users/${user}/repos`).then(response => console.log(response.data));
  }
  const [user, setUser] = useState('');
  return (
    <>
      <h1>{props.title}</h1>
      <p> Searching repos from {user}</p>
      <input className='userInput' placeholder='User' value={user} onChange={e => setUser(e.target.value)}/>
      <button type='button' onClick={handleSearch}>Search</button>
    </>
  );
}

export default App;