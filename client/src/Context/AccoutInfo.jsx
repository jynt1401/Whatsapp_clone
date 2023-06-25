import { createContext, useState } from "react";

export const AccountContext = createContext(null);

const AccountInfo = ({ children }) => {
  const [account, setaccount] = useState();
  const [call, setcall] = useState({});
  return (
    <AccountContext.Provider
      value={{
        account,
        setaccount,
        call,
        setcall
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
export default AccountInfo;
