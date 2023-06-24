import React from 'react'
import bg from '../../../src/Images/empty.png'

export default function EntryChat() {
  return (
    <div className="bg-[#222e35] h-screen border-l-2 border-[#222933] ">
       <div
          className="bg-cover w-[700px] h-[700px] mx-auto my-auto "
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
    </div>
  )
}
