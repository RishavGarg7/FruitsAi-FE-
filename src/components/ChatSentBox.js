import React from 'react'

export default function CharSentBox({text}) {
  return (
    <div className='chat-send-outer-box'>
        <div className='chat-send-msg'>{text}</div>
    </div>
  )
}
