import React, { useEffect, useState } from 'react';

import './styles.css';

import MessageBox from '../../components/MessageBox';


import FormMessage from '../../components/FormMessage';

import socket from '../../utils/socketClient';

function Chat() {
  // const messages = [
  //   { user: 'Renato', sentAt: '11:00', message: 'oi', isMine: true },
  //   { user: 'Coruja', sentAt: '11:01', message: 'e ai', isMine: false },
  //   { user: 'Coruja', sentAt: '11:01', message: 'tudo bem?', isMine: false },
  //   { user: 'Renato', sentAt: '11:01', message: 'tudo certo e ctg?', isMine: false }
  // ]

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat.receiveMessage', (data) => {
      setMessages([...messages, data])
    });
  }, [messages]);
  

  return (
    <section class="msger">
      <header class="msger-header">
        <div class="msger-header-title">
          <i class="fas fa-comment-alt"></i> SimpleChat
        </div>
        <div class="msger-header-options">
          <span><i class="fas fa-cog"></i></span>
        </div>
      </header>

      <main class="msger-chat">
        {messages.map(({username: user, sentAt, message}) => (
          <MessageBox 
            isMine={user === localStorage.getItem('username')} 
            user={user} 
            sentAt={sentAt} 
            message={message} /> 
        ))}
      </main>

      <FormMessage />
    </section>
  );
}

export default Chat;