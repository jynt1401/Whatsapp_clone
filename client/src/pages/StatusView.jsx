import React, { useContext } from "react";
import { AccountContext } from "../Context/AccoutInfo";

export default function StatusView() {
  const { setwatch, watch, setwatchdata, watchdata } =
    useContext(AccountContext);

  const openStatus = () => {
    setwatchdata({});
    setwatch(false);
  };

  return (
    <div className="bg-[#000000c4] w-[100%] h-screen text-white z-50 fixed top-0">
      <div className="flex justify-center mt-[20px]">
        <div className="w-[90%] mx-auto h-[670px]">
          <div className="font-bold flex flex-row-reverse m-5">
            <button onClick={openStatus}>X</button>
          </div>
          <div className="mx-auto w-[90%]">
            <div className="text-center font-bold mb-5">{watchdata.name}</div>
            <div
              className="bg-no-repeat w-[500px] h-[500px] bg-cover mx-auto"
              style={{ backgroundImage: `url(${watchdata.url})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
