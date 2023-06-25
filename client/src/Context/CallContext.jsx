import { createContext, useState } from "react";

export const CallContext = createContext("");

const Callinfo = ({ children }) => {
  const [me, setme] = useState("");
  const [stream, setstream] = useState();
  const [receivingCall, setreceivingCall] = useState(false);
  const [caller, setcaller] = useState("");
  const [callerSignal, setcallerSignal] = useState();
  const [callAccepted, setcallAccepted] = useState(false);
  const [idToCall, setidToCall] = useState("");
  const [callEnded, setcallEnded] = useState(false);
  const [name, setname] = useState("");

  return (
    <CallContext.Provider
      value={{
        me,
        setme,
        stream,
        setstream,
        receivingCall,
        setreceivingCall,
        caller,
        setcaller,
        callerSignal,
        setcallerSignal,
        callAccepted,
        setcallAccepted,
        idToCall,
        setidToCall,
        callEnded,
        setcallEnded,
        name,
        setname,
      }}
    >
      {children}
    </CallContext.Provider>
  );
};
export default Callinfo;
