import React, { useContext } from "react";
import { AccountContext } from "../../../Context/AccoutInfo";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import bg from "../../../Images/bgchat.png";
import { SelectuserContext } from "../../../Context/Selectuser";

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
        className="bg-white h-[580px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        cfgcfjckhvkjvkjvvbhjkml
      </div>
      <div className="bg-[#222e35] "></div>
    </div>
  );
}
