import React, { useContext } from "react";
import EntryChat from "./right/EntryChat";
import Chatarea from "./right/Chatarea";
import { SelectuserContext } from "../../Context/Selectuser";
import Callinfo, { CallContext } from "../../Context/CallContext";

export default function Right() {
  const { userinfo, setuserinfo } = useContext(SelectuserContext);

  return (
    <Callinfo>
      <div className="bg-[#222e35] h-[710px] border-l-2 border-[#222933] ">
        {userinfo ? <Chatarea /> : <EntryChat />}
      </div>
    </Callinfo>
  );
}
