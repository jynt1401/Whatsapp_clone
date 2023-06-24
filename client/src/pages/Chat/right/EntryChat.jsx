import React from "react";
import bg from "../../../Images/empty.png";

export default function EntryChat() {
  return (
    <div className="bg-[#222e35] h-[710px] border-l-2 border-[#222933] ">
      <div
        className="bg-cover w-[650px] h-[650px] mx-auto my-auto "
        style={{ backgroundImage: `url(${bg})` }}
        
      ></div>
    </div>
  );
}
