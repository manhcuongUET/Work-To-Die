import { createContext } from "react";

const resumeMailContext = createContext({
  resumeMail: null,
  setResumeMail: () => {},
});



export default resumeMailContext;
