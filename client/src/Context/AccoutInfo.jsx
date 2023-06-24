import { createContext, useState } from "react";

export const AccountContext = createContext(null);

const AccountInfo = ({ children }) => {
  const [account, setaccount] = useState();
  return (
    <AccountContext.Provider
      value={{
        account,
        setaccount,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
export default AccountInfo;
