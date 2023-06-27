import React from "react";

export default function Send(data) {
  // console.log(data);
  return (
    <div className="p-2 rounded-md  w-fit max-w-[400px] m-1 break-all mr-5 bg-[#1d7569]">
      {data.data.text}
    </div>
  );
}
