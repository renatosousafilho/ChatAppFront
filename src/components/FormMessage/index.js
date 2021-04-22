import React, { useState } from 'react';

import socket from '../../utils/socketClient';

function FormMessage({dest}) {
  const [message, setMessage] = useState('');
  
  const handleSend = (e) => {
    e.preventDefault();
    const from = localStorage.getItem('currentUser');
    console.log(dest);
    socket.emit('chat.sendMessage', { message, from, dest });
  }

  return (
    <form onSubmit={handleSend}>
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