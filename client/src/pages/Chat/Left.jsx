import React, { useContext } from "react";
import { AccountContext } from "../../Context/AccoutInfo";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import { BiSolidMessageDetail } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import Logout from "./Left/Logout";

export default function Left() {
  const { account } = useContext(AccountContext);
  const handleclick = () => {};
  return (
    <div className="bg-[#222e35] h-[120px] ">
      <div className="flex justify-between pt-3">
        <div
          className="bg-cover w-[35px] h-[35px] rounded-full m-2"
          style={{ backgroundImage: `url(${account.picture})` }}
        ></div>
        <div className="">
          <button
            onClick={handleclick}
            className="m-2  h-[30px] flex flex-row-reverse"
            style={{ color: "#abaeb0" }}
          >
            <PiDotsThreeVerticalBold size={25} className="m-1" />
            <BiSolidMessageDetail size={21} className="m-1" />
            <LuHistory size={21} className="m-1" />
            {/* <Logout /> */}
          </button>
        </div>
      </div>

      <div className=" mt-[10px] flex">
       
        <input
          className="w-[400px] h-[35px] ml-2 focus:outline-none text-white rounded-3xl bg-[#0b131a] border-none p-5 placeholder:translate-x-4 "
          placeholder="search or start new chat"
        ></input>
      </div>
    </div>
  );
}
