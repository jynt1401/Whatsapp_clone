import React, { useContext } from "react";
import { SelectuserContext } from "../../../Context/Selectuser";
import { AccountContext } from "../../../Context/AccoutInfo";
import axios from "axios";

export default function UserChat({ userdata }) {
  // console.log(userdata);
  const setuserforchat = async () => {
    setuserinfo(userdata);
    setcall({ sender: account.email, reciver: userdata.email });

    await axios({
      method: "POST",
      url: "https://whatsapp-clone-v2qu.onrender.com/convo/setconvo",
      data: {
        senderId: account.email,
        reciverId: userdata.email,
      },
      headers: {
        "Content-type": "application/json",
      },
    }).then(async (res) => {
      console.log("************");
      console.log(res.data);
      setconvoID(res.data.convoexist[0]._id);
      setlastmsg(res.data.convoexist[0].msg);
    });
  };

  const {
    userinfo,
    setuserinfo,
    setconvoID,
    setlastmsg,
    lastmsg,
    convoID,
    setchats,
  } = useContext(SelectuserContext);
  const { call, setcall } = useContext(AccountContext);
  const { account } = useContext(AccountContext);

  return (
    <div
      className="w-[100%] h-[70px] mb-1 flex p-1  m-1  "
      onClick={setuserforchat}
    >
      <div
        className="bg-cover w-[40px] h-[40px] rounded-full m-1"
        style={{ backgroundImage: `url(${userdata.profile})` }}
      ></div>
      <div className="border-b-2 border-[#272e36] w-[90%]">
        <div className="ml-3 mt-1 font-semibold">{userdata.name}</div>
        <div className="ml-3 text-[#878787] text-[12px]">
          click to chat with {userdata.name}
        </div>
      </div>
    </div>
  );
}
