import { createContext, useState } from "react";

export const SelectuserContext = createContext("");

const Userinfoforchat = ({ children }) => {
  const [userinfo, setuserinfo] = useState();
  const [opencall, setopencall] = useState(false);
  return (
    <SelectuserContext.Provider
      value={{
        userinfo,
        setuserinfo,
        opencall,
        setopencall,
      }}
    >
      {children}
    </SelectuserContext.Provider>
  );
};
export default Userinfoforchat;
