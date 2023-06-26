import React, { useContext } from "react";
import Left from "./Left";
import Right from "./Right";
import EntryChat from "./right/EntryChat";
import Userinfoforchat, { AccountContext, SelectuserContext } from "../../Context/Selectuser";
import Callinfo, { CallContext } from "../../Context/CallContext";
import Call from "./Call";

export default function Workspace() {
  
  return (
    <Userinfoforchat>
        
        <div className=" bg-[#101d25] mx-auto shadow-lg relative ">
          <div className="flex justify-between">
            <div className="w-[29%] ">
              <Left />
            </div>
            <div className="w-[71%] ">
              <Right />
            </div>
          </div>
        </div>
      
    </Userinfoforchat>
  );
}
