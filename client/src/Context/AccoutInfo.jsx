import { createContext, useState } from "react";

export const AccountContext = createContext(" ");

const AccountInfo = ({ children }) => {
  const [account, setaccount] = useState();
  const [status, setstatus] = useState(false);
  const [watch, setwatch] = useState(false);
  const [call, setcall] = useState({});
  const [watchdata, setwatchdata] = useState({});

  return (
    <AccountContext.Provider
      value={{
        account,
        setaccount,
        call,
        setcall,
        status,
        setstatus,
        setwatch,
        watch,
        setwatchdata,
        watchdata,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
export default AccountInfo;
