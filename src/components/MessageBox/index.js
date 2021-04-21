import React from 'react';

function MessageBox({isMine, user, sentAt, message}) {
  const positionClass = (isMine) ? 'right-msg' : 'left-msg';

  return (
    <div className={`msg ${positionClass}`}>
      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">{user}</div>
          <div className="msg-info-time">{sentAt}</div>
        </div>

        <div className="msg-text">
          {message}
        </div>
      </div>
    </div>
  );
}

export default MessageBox;