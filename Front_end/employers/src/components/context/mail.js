import { createContext } from "react";

const mailContext = createContext({ mail: null, setMail: () => {} });

export default mailContext;
