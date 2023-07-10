import React, { useContext, useEffect, useRef, useState } from "react";
import { AccountContext } from "../../../Context/AccoutInfo";
import { BsEmojiSmile } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { GoPaperclip } from "react-icons/go";
import { BsFillMicFill } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import bg from "../../../Images/bgchat.png";
import { SelectuserContext } from "../../../Context/Selectuser";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import Callinfo, { CallContext } from "../../../Context/CallContext";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PhoneIcon from "@material-ui/icons/Phone";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../../../App.css";

import Peer from "simple-peer";
import io from "socket.io-client";
import axios from "axios";
import Send from "../messageUi/Send";
import Reciver from "../messageUi/Reciver";
const socket = io.connect("https://whatsapp-clone-82zf.onrender.com");
export default function Chatarea() {
  const navigate = useNavigate();
  const [Newm, setNewm] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { opencall, setopencall, setchats, chats } =
    useContext(SelectuserContext);

  if (opencall) {
    navigate("/call");
  }

  const { account, call } = useContext(AccountContext);
  const { userinfo, setuserinfo, setconvoID, convoID } =
    useContext(SelectuserContext);
  // console.log(userinfo);
  // console.log(account);

  const videocall = () => {
    console.log(call);
    setopencall(true);
  };

  const [text, settext] = useState("");
  // console.log(text);
  const sendText = async (e) => {
    if (e.keyCode === 13 && text.length !== 0) {
      console.log("You must have pressed Enter ");
      let msg = {
        senderId: account.email,
        reciverId: userinfo.email,
        convoID: convoID,
        text: text,
      };
      console.log(msg);
      await axios({
        method: "POST",
        url: "https://whatsapp-clone-82zf.onrender.com/convo/startconvo",
        data: msg,

        headers: {
          "Content-type": "application/json",
        },
      }).then(async (res) => {
        // console.log(res.data);
      });
      settext("");
      e.preventDefault();
      // console.log(Newm)
      setNewm((prev) => !prev);
    }
  };

  const getdata = async () => {
    await axios({
      method: "POST",
      url: "https://whatsapp-clone-82zf.onrender.com/convo/chats",
      data: {
        id: convoID,
      },
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      // console.log("********77777777777777777");
      // console.log(res.data);
      setchats(res.data);
    });
  };
  useEffect(() => {
    getdata();
    scrollToBottom();
  }, [chats, Newm]);

  // console.log(chats);

  return (
    <div>
      <div className="bg-[#222e35] h-[65px] flex">
        <div className="w-[7%]">
          <div
            className="bg-cover w-[45px] h-[45px] rounded-full mt-3 mx-3 "
            style={{ backgroundImage: `url(${userinfo.profile})` }}
          ></div>
        </div>
        <div className="w-[78%]  mt-2 font-semibold text-[18px] text-white">
          {userinfo.name}
          <h6 className="font-normal text-[13px]">online</h6>
        </div>
        <div
          className="w-[15%] flex flex-row-reverse mr-3 mt-5"
          style={{ color: "#abaeb0" }}
        >
          <PiDotsThreeVerticalBold size={25} className="mr-2 ml-2" />
          <BiSearch size={25} className="" />
          <BsCameraVideoFill
            size={25}
            className="mr-5 ml-2"
            onClick={videocall}
          />
        </div>
      </div>

      <div
        className="bg-white h-[580px] overflow-y-scroll  text-white"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "30%" }}
      >
        {chats ? (
          <div className="">
            {chats.map((data) => (
              <div>
                <div ref={messagesEndRef} />
                {data.sId === account.email ? (
                  <div className="flex flex-row-reverse">
                    <Send data={data} />
                  </div>
                ) : (
                  <div className="flex ">
                    <Reciver data={data} />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="font-bold text-white">fcvghbjn</div>
        )}
      </div>

      <div className="bg-[#222e35] flex h-[65px] " style={{ color: "#abaeb0" }}>
        <div className="w-[5%]  ml-3">
          {" "}
          <BsEmojiSmile size={25} className="ml-3 mt-4" />
        </div>
        <div className="w-[5%] ml-3 ">
          <GoPaperclip size={25} className=" mt-4" />
        </div>
        <div className="  ">
          <div className=" mt-[10px] flex">
            <input
              className="w-[900px] h-[35px] ml-2 mr-1 focus:outline-none text-white rounded-xl bg-[#344651] border-none p-5 placeholder:translate-x-2 "
              placeholder="Type a message"
              onKeyDown={sendText}
              value={text}
              onChange={(e) => {
                settext(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="w-[5%]  mx-3">
          <BsFillMicFill size={25} className="ml-3 mt-4" />
        </div>
      </div>
    </div>
  );
}
