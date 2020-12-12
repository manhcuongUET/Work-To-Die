import { createContext } from "react";

const jobContext = createContext({
  selectedJob: {},
  setSelectedJob: () => {},
});



export default jobContext;
