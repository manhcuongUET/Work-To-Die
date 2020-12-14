import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Route } from "react-router";
import { SignInEmployers } from "./SignIn";
import { SignUpEmployers } from "./SignUp";


export const AuthEmployers = () => {
//   const history = useHistory();
//   const { authUser } = useContext(authCtx);

//   useEffect(() => {
//     if (authUser) {
//       history.push("/");
//     }
//   }, [authUser, history]);

  return (
    <Row>
      <Col
        xs={{ span: 12 }}
        lg={{ span: 6, offset: 3 }}
        xl={{ span: 4, offset: 4 }}
      >
        <Route path="/authEmployers/sign-in" component={SignInEmployers} />
        <Route path="authEmployers/sign-up" component={SignUpEmployers} />
      </Col>
    </Row>
  );
};
