import React, { useContext } from 'react'
import { AccountContext } from '../../../Context/AccoutInfo'


export default function Logout() {
    const {setaccount}=useContext(AccountContext);
    const handleclick=()=>{
        setaccount({});
    }
  return (
    <div className='bg-white text-black p-1 w-[100px] font-semibold mt-[20px]'>
      <button onClick={handleclick}>
        Logout
      </button>
    </div>
  )
}
