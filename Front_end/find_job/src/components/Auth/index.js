import React, { useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Route , useHistory} from "react-router-dom";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import authCtx from "../../context/auth";

export const Auth = () => {
  const history = useHistory();
  const {authUser} = useContext(authCtx)

  useEffect(()=>{
    if(authUser){
      history.push("/")
    }
  },[authUser, history])

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
