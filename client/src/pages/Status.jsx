import React, { useContext, useEffect, useState } from "react";
import url from "../Images/qr.png";
import UplodStatus from "./UplodStatus";
import axios from "axios";

export default function Status() {
  const [uploadstatus, setuploadstatus] = useState(false);
  const open=()=>{
    setuploadstatus(true);
  }
  
  
  return (
    <>
      {!uploadstatus ? (
        <>
          <div className=" w-[90%] ">
            <div className=" h-[70px] flex justify-between">
              <div className="w-[80px]">
                <div
                  className="bg-cover border-green-500 border-2 w-[45px] h-[45px] rounded-full  ml-4"
                  style={{ backgroundImage: `url(${url})` }}
                ></div>
              </div>
              <div className="w-[300px] " onClick={open}>
                <div className="font-bold text-white">My Status</div>
                <div className=" text-[#a4a4a4]"> Tap to add status</div>
              </div>
            </div>
            <div className="overflow-y-scroll bg-black h-[470px] ">my </div>
          </div>
        </>
      ) : (
        <><UplodStatus open={setuploadstatus}/></>
      )}
    </>
  );
}
