import React, { useState } from 'react';

import axios from 'axios';
import { useHistory } from 'react-router';

// import { Container } from './styles';

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.length === 0) return;

    await axios.post('http://localhost:3001/login', { username });
    localStorage.setItem('currentUser', username);
    history.push('/chats');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div class="msger-inputarea">
        <input 
          type="text" 
          class="msger-input" 
          placeholder="Digite um nome de usuário..." 
          onChange={(e) => setUsername(e.target.value)}
          />
        <button 
          type="submit" 
          class="msger-send-btn"
          >Entrar</button>
      </div>
    </form>
  );
}

export default Login;