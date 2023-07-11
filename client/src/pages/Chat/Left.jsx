import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../Context/AccoutInfo";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import { BiSolidMessageDetail } from "react-icons/bi";
import { BiArchiveIn } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import axios from "axios";
import Logout from "./Left/Logout";
import UserChat from "./Left/UserChat";
import Status from "../Status";

export default function Left() {
  const { call } = useContext(AccountContext);
  console.log(call);

  const [allcon, setallcon] = useState([]);
  const [user, setuser] = useState("");
  console.log(user);
  console.log(allcon);

  const getFilteredItem = (query, item) => {
    if (!query) {
      return item;
    }
    // .replace(/\s/g, '')
    return item.filter((val) => {
      let str = val.name.toLowerCase().split(" ").join("");
      let q = query.split(" ").join("");
      return str.toLowerCase().indexOf(q.toLowerCase()) > -1;
    });
  };
  const filtered = getFilteredItem(user, allcon);
  console.log(filtered);

  useEffect(() => {
    getalluser();
  }, []);

  const getalluser = async () => {
    await axios({
      method: "POST",
      url: "https://whatsapp-clone-v2qu.onrender.com/users/all",
      data: { name: "hello" },
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      console.log(res.data.user);
      setallcon(res.data.user);
    });
  };
  console.log(allcon);

  const { account, status, setstatus } = useContext(AccountContext);
  const handleclick = () => {
    setstatus(!status);
  };
  return (
    <div className="bg-[#222e35] h-[65px] ">
      <div className="flex justify-between pt-3">
        <div
          className="bg-cover w-[35px] h-[35px] rounded-full m-2"
          style={{ backgroundImage: `url(${account.picture})` }}
        ></div>
        <div className="">
          <button
            className="m-2  h-[30px] flex flex-row-reverse"
            style={{ color: "#abaeb0" }}
          >
            <PiDotsThreeVerticalBold size={25} className="ml-3" />
            <BiSolidMessageDetail size={23} className="ml-3 mt-1" />
            <LuHistory size={23} className="ml-2 mt-1" />
            {/* <Logout /> */}
          </button>
        </div>
      </div>

      <div className=" mt-[10px] flex">
        <input
          className="w-[350px] h-[35px] ml-2 mr-2 focus:outline-none text-white rounded-xl bg-[#222e35] border-none p-5 placeholder:translate-x-4 "
          placeholder="search or start new chat"
          onChange={(e) => {
            setuser(e.target.value);
          }}
        ></input>
        <button
          onClick={handleclick}
          className="w-[90px] h-[40px] mr-2 text-[17px]  text-center focus:outline-none text-[#bdd8e3] rounded-xl bg-[#222e35] border-none "
        >
          Status
        </button>
      </div>

      {status ? (
        <div className="ml-5 mt-5">
          <Status />
        </div>
      ) : (
        <div>
          <div className="w-[400px] h-[35px] flex ml-2  mr-2 border-b-2 border-[#272e36] text-white  mt-[15px] p-5 ">
            <BiArchiveIn
              size={23}
              style={{ color: "#00a884" }}
              className="ml-[-10px] mt-[-13px]"
            />

            <div className="font-bold ml-6 mt-[-13px]">Archived</div>
          </div>
          <div className="h-[350px] text-white mt-5 ">
            {filtered.map((userdata) => (
              <div className="">
                <UserChat userdata={userdata} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
