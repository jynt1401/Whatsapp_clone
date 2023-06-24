import { createContext, useState } from "react";

export const SelectuserContext = createContext(null);

const Userinfoforchat = ({ children }) => {
  const [userinfo, setuserinfo] = useState();
  return (
    <SelectuserContext.Provider
      value={{
        userinfo,
        setuserinfo,
      }}
    >
      {children}
    </SelectuserContext.Provider>
  );
};
export default Userinfoforchat;
