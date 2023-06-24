import React, { useContext } from "react";
import Auth from './Auth';
import Chat from './Chat';
import { AccountContext } from '../Context/AccoutInfo';

const Qr = require("../Images/qr.png");



export default function Home() {

  const {account}=useContext(AccountContext);


  return (
    <div className="">
      {account? <Chat/>:<Auth/>}
    </div>
  );
}
