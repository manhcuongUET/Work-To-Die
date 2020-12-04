import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const handleChanges = (event) =>{
    setValues({
      ...values,
      [values.target.name]: event.target.values
    })
  }
  // const handleSubmit = (event) =>{
  //   event.preventDefault;
  //   return;
  // }


  return (
    <Card className="mt-5">
      <Card.Header>SIGN IN</Card.Header>
      <Card.Body>
        <Form >
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username ..."  />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password ..." />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            block
            className="rounded-pill"
          >
            Sign in
          </Button>
          <p className="mt-2 small text-center">
            Don't have account? <Link to="/auth/sign-up">Sign up</Link> now
          </p>
        </Form>
      </Card.Body>
    </Card>
  );
};
