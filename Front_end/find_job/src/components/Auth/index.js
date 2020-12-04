import React from "react";
import {Row,Col } from "react-bootstrap";
import { Route } from "react-router-dom";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

const Auth = () => {
  return (
    <Row>
    <Col
      xs={{ span: 12 }}
      lg={{ span: 6, offset: 3 }}
      xl={{ span: 4, offset: 4 }}
    >
      <Route path="/auth/sign-up/" component={SignUp} />
      <Route path="/auth/sign-in/" component={SignIn} />
    </Col>
  </Row>
  );
};

export default Auth;
