import React from 'react'

export default function UserChat({userdata}) {
    console.log(userdata)
  return (
    <div className='w-[100%] h-[70px] mb-1 flex p-1  m-1  '>
        <div
          className="bg-cover w-[40px] h-[40px] rounded-full m-1"
          style={{ backgroundImage: `url(${userdata.profile})` }}
        ></div>
        <div className='border-b-2 border-[#272e36] w-[90%]'>

        <div className='ml-3 mt-1'>{userdata.name}</div>
        </div>
      
    </div>
  )
}