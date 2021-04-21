import React, { useState } from 'react';

import socket from '../../utils/socketClient';

function FormMessage() {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    socket.emit('chat.sendMessage', { message, username });
  }

  return (
    <form onSubmit={handleSend}>
      <div class="msger-inputarea">
        <input 
          type="text" 
          class="msger-input" 
          placeholder="Digite seu nome de usuário..." 
          onChange={(e) => setUsername(e.target.value)}
          />
      </div>
      <div class="msger-inputarea">
        <input 
          type="text" 
          class="msger-input" 
          placeholder="Digite uma mensagem..." 
          onChange={(e) => setMessage(e.target.value)}
          />
        <button 
          type="submit" 
          class="msger-send-btn"
          >Enviar</button>
      </div>
    </form>
  );
}

export default FormMessage;