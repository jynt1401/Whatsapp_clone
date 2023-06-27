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
      url: "http://localhost:3001/convo/setconvo",
      data: {
        senderId: account.email,
        reciverId: userdata.email,
      },
      headers: {
        "Content-type": "application/json",
      },
    }).then(async (res) => {
      console.log("************");
      console.log(res.data.convoexist[0]._id);
      setconvoID(res.data.convoexist[0]._id);
      
    });
  };

  const { userinfo, setuserinfo, setconvoID, convoID ,setchats} =
    useContext(SelectuserContext);
  const { call, setcall } = useContext(AccountContext);
  const { account } = useContext(AccountContext);
  // console.log(userinfo);

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
        <div className="ml-3 mt-1">{userdata.name}</div>
      </div>
    </div>
  );
}
