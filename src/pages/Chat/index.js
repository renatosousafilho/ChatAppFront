import React from 'react';

import './styles.css';

import MessageBox from '../../components/MessageBox';

function Chat() {
  const messages = [
    { user: 'Renato', sentAt: '11:00', message: 'oi', isMine: true },
    { user: 'Coruja', sentAt: '11:01', message: 'e ai', isMine: false },
    { user: 'Coruja', sentAt: '11:01', message: 'tudo bem?', isMine: false },
    { user: 'Renato', sentAt: '11:01', message: 'tudo certo e ctg?', isMine: false }
  ]

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
        {messages.map(({user, sentAt, message, isMine}) => (
          <MessageBox isMine={isMine} user={user} sentAt={sentAt} message={message} /> 
        ))}
      </main>

      <form class="msger-inputarea">
        <input type="text" class="msger-input" placeholder="Enter your message..." />
        <button type="submit" class="msger-send-btn">Send</button>
      </form>
    </section>
  );
}

export default Chat;