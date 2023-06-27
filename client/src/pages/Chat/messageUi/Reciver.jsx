import React from "react";

export default function Reciver(data) {
//   console.log(data);
  return <div className="p-2 rounded-md  w-fit max-w-[400px] m-1 ml-5 break-all bg-[#202c32] ">{data.data.text}</div>;
}
