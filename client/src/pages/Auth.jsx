import { GoogleLogin } from "@react-oauth/google";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { AccountContext } from "../Context/AccoutInfo";


const Qr = require("../Images/qr.png");

export default function Auth() {
  const {setaccount} = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const info = jwt_decode(res.credential);
    console.log(info);
    setaccount(info);
  };

  const onLoginError = async (res) => {
    console.log("falied", res);
  };

  return (
    <div className="h-screen w-[100%] min-w-[1150px] bg-[#0b131a] absolute">
      <div className="h-[120px] bg-[#1c2831]"></div>
      <div className="h-[70%] w-[70%] mx-auto bg-white shadow-lg relative top-[-50px]">
        <div className="flex">
          <div className="  w-[40%] mx-auto">
            <div className="mt-[100px]">
              <div className="font-bold text-[20px] p-7">
                Use WhatsApp on your computer
              </div>
              <div className="text-left mx-auto w-[80%] ml-[50px]">
                <p className="m-1">1.Open WhatsApp on your phone</p>
                <p className="m-1">2.Click on the QR code to login</p>
                <p className="m-1">3.Run WhatsApp on your computer</p>
              </div>
              <div className="font-semibold text-[15px] text-[#2f7e74] p-7">
                Link with phone number
              </div>
            </div>
          </div>
          <div className=" w-[40%] mx-auto mt-12">
            <div className="absolute">
              <div className=" relative top-[160px] ml-14 ">
                <GoogleLogin
                  onSuccess={onLoginSuccess}
                  onError={onLoginError}
                />
              </div>
              <div
                className="w-[280px]  h-[280px] bg-cover mx-auto border-2 ml-[50px] top-[100px]"
                style={{ backgroundImage: `url(${Qr})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
