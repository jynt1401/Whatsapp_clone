import React, { useContext } from "react";
import Left from "./Left";
import Right from "./Right";
import EntryChat from "./right/EntryChat";
import Userinfoforchat, { SelectuserContext } from "../../Context/Selectuser";
import Callinfo, { CallContext } from "../../Context/CallContext";
import Call from "./Call";
import StatusView from "../StatusView";
import { AccountContext } from "../../Context/AccoutInfo";

export default function Workspace() {
  const { watch } = useContext(AccountContext);

  return (
    <Userinfoforchat>
      {watch ? (
        <>
          <StatusView />
        </>
      ) : (
        <></>
      )}

      <div className=" bg-[#101d25] mx-auto shadow-lg relative h-screen">
        <div className="flex justify-between">
          <div className="w-[29%] ">
            <Left />
          </div>
          <div className="w-[71%] ">
            <Right />
          </div>
        </div>
      </div>
    </Userinfoforchat>
  );
}
