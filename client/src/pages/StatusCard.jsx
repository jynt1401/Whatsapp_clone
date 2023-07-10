import React, { useContext } from "react";
import { AccountContext } from "../Context/AccoutInfo";

export default function StatusCard({ data }) {
  console.log(data);
  const url = data.url;
  const dateObj = new Date(data.createdAt);
  const hour = dateObj.getUTCHours();
  const minute = dateObj.getUTCMinutes();

  console.log(`${hour}:${minute}`);

  const { setwatch, watch, setwatchdata, watchdata } =
    useContext(AccountContext);

  const openStatus = () => {
    setwatchdata(data);
    setwatch(true);

  };

  return (
    <button
      onClick={openStatus}
      className=" h-[70px] m-2 flex justify-between "
    >
      <div className="">
        <div
          className="bg-cover border-green-500 border-2 w-[45px] h-[45px] rounded-full  ml-4"
          style={{ backgroundImage: `url(${url})` }}
        ></div>
      </div>
      <div className=" ml-2 text-left overflow-hidden">
        <div className="font-semibold text-white">{data.name}</div>
        <div className=" text-[#a4a4a4]">
          {" "}
          Today, {hour}:{minute}
        </div>
      </div>
    </button>
  );
}
