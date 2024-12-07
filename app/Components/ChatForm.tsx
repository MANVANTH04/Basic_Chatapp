"use client"
import React from 'react'
import { useState } from 'react'

const ChatForm = ({onSendMessage}:{onSendMessage: (value: string) => void}) => {

    const [value, setValue] = useState("")

    const handleChange = (e: React.FormEvent)=>{
        e.preventDefault();
        console.log("");
    }
    if (value.trim() !==""){
        setValue("")
        onSendMessage(value)
    }

  return (


    <form onSubmit={handleChange} className='flex gap-2 mt-4'>
        <input type="text"
        onChange={(e)=>{setValue(e.target.value)}}
        className='flex-1 px-4 border-2 py-2 rounded-lg focus:outline-none' placeholder='Send any message' />
        <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded'>Send</button>
    </form>
  )
}

export default ChatForm