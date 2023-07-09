import { createContext, useState } from "react";

export const SelectuserContext = createContext("");

const Userinfoforchat = ({ children }) => {
  const [userinfo, setuserinfo] = useState();
  const [opencall, setopencall] = useState(false);
  const [convoID, setconvoID] = useState("");
  const [lastmsg, setlastmsg] = useState("");
  const [chats, setchats] = useState([]);
  return (
    <SelectuserContext.Provider
      value={{
        userinfo,
        setuserinfo,
        opencall,
        setopencall,
        convoID,
        setconvoID,
        setchats,
        chats,
        setlastmsg,
        lastmsg,
      }}
    >
      {children}
    </SelectuserContext.Provider>
  );
};
export default Userinfoforchat;
