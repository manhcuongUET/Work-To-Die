import { createContext } from "react";

const companyContext = createContext({
  selectedCompany: null,
  setSelectedCompany: () => {},
});



export default companyContext;
