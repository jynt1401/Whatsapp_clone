import React, { useContext } from "react";
import { AccountContext } from "../../../Context/AccoutInfo";
import { BsEmojiSmile } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { GoPaperclip } from "react-icons/go";
import { BsFillMicFill } from "react-icons/bs";
import bg from "../../../Images/bgchat.png";
import { SelectuserContext } from "../../../Context/Selectuser";
import { PiDotsThreeVerticalBold } from "react-icons/pi";


export default function Chatarea() {
  const { account } = useContext(AccountContext);
  const { userinfo, setuserinfo } = useContext(SelectuserContext);
  console.log(userinfo);
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
        </div>
      </div>

      <div
        className="bg-white h-[580px] overflow-y-scroll "
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "30%" }}
      >
        <div>userinfo</div>
      </div>

      <div className="bg-[#222e35] flex h-[65px] w-[100%] " style={{ color: "#abaeb0" }}>
        <div className="w-[5%]  ml-3"> <BsEmojiSmile size={25} className="ml-3 mt-4" /></div>
        <div className="w-[5%] ml-1 "><GoPaperclip size={25} className=" mt-4" /></div>
        <div className="w-[70%]  ">
        <div className=" mt-[10px] flex">
        <input
          className="w-[900px] h-[35px] ml-2 mr-2 focus:outline-none text-white rounded-xl bg-[#344651] border-none p-5 placeholder:translate-x-2 "
          placeholder="Type a message"
        ></input>
      </div>
        </div>
        <div className="w-[5%]  mx-3"><BsFillMicFill size={25} className="ml-3 mt-4" /></div>
      </div>
    </div>
  );
}
