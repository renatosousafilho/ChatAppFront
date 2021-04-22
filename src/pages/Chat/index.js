import React, { useEffect, useState } from 'react';

import './styles.css';

import MessageBox from '../../components/MessageBox';


import FormMessage from '../../components/FormMessage';

import socket from '../../utils/socketClient';
import { useParams } from 'react-router';

function Chat() {
  const { username } = useParams();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const from = localStorage.getItem('currentUser');
    const to = username;

    const key = [from, to].sort().join('-');
    
    socket.emit('connectRoom', key);

    socket.on('chat.receiveMessage', (data) => {
      console.log(data);
      setMessages([...messages, data])
    });
  }, [messages]);
  

  return (
    <section class="msger">
      <header class="msger-header">
        <div class="msger-header-title">
          <i class="fas fa-comment-alt"></i>
          De: {localStorage.getItem('currentUser')} para {username}
        </div>
        <div class="msger-header-options">
          <span><i class="fas fa-cog"></i></span>
        </div>
      </header>

      <main class="msger-chat">
        {messages.map(({from: user, sentAt, message}) => (
          <MessageBox 
            isMine={user === localStorage.getItem('currentUser')} 
            user={user} 
            sentAt={sentAt} 
            message={message} /> 
        ))}
      </main>

      <FormMessage dest={username} />
    </section>
  );
}

export default Chat;