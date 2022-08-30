import React, { useState } from 'react';
import Close from '../assets/close.png';

const NotificationBox = ({ message, clearNotificationMessage }) => {


  if (!message) return <></>

  return (
    <div className='notification-box'>
      <img className='notification-box-close-button hover'
        src={Close}
        onClick={clearNotificationMessage} />
      {message}
    </div>
  );
}

export default NotificationBox;