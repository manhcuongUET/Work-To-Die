import React from "react";
import { Route, useHistory, Link } from "react-router-dom";
import { Companies } from "../Company/Companies";
import { CompanyInfo } from "../Company/CompanyInfo";

export const Company = () => {
  return (
    <>
      {/* <CompanyCtx.Provider value={(selectedCompany, setSelectedCompany)}> */}
        <Route  path="/companies" component={Companies} />
        <Route exact path="/companies/info" component={CompanyInfo} />
      {/* </CompanyCtx.Provider> */}
    </>
  );
};
