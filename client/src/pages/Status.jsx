import React, { useContext, useEffect, useState } from "react";
import url from "../Images/qr.png";
import UplodStatus from "./UplodStatus";
import axios from "axios";
import { AccountContext } from "../Context/AccoutInfo";
import StatusCard from "./StatusCard";

export default function Status() {
  const { status, account } = useContext(AccountContext);

  const [uploadstatus, setuploadstatus] = useState(false);
  const [datastatus, setdatastatus] = useState([]);
  const open = () => {
    setuploadstatus(true);
  };
  useEffect(() => {
    f();
  }, [status]);

  const f = async () => {
    await axios({
      method: "POST",
      url: "http://localhost:3001/status/get",

      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      console.log(res.data);
      setdatastatus(res.data);
    });
  };

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
              <div className="w-[300px] ml-5" onClick={open}>
                <div className="font-bold text-white">My Status</div>
                <div className=" text-[#a4a4a4]"> Tap to add status</div>
              </div>
            </div>
            <div className=" h-[470px] text-white">
              {datastatus.length !== 0 ? (
                <>
                  <div>
                    <div className=" m-3 text-[#c1c1c1]">Recent updated</div>
                    <div className="overflow-y-scroll  h-[420px]">
                      {datastatus.map((data) => (
                        <div>
                          <StatusCard data={data} />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <UplodStatus open={setuploadstatus} />
        </>
      )}
    </>
  );
}
