import React from 'react'
import Left from './Left'
import Right from './Right'
import EntryChat from './EntryChat'

export default function Workspace() {
  return (
    <div className=" bg-[#0b131a] mx-auto shadow-lg relative ">
      <div className='flex justify-between'>
        <div className='w-[29%] '><Left/></div>
        <div className='w-[71%] '><EntryChat/></div>
      </div>
    </div>
  )
}
