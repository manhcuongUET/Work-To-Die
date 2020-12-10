import React, { useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [err, setErr] = useState(null);

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    setErr(null)
    if (values.confirmPassword !== values.password) {
      setErr("Confirm Password not matched!");
    }
    return;
  };
  return (
    <Card className="mt-5">
      <Card.Header>Sign up</Card.Header>
      <Card.Body>
      {err ? <Alert variant="danger">{err}</Alert>: null}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username ..."
              name="username"
              value={values.username}
              onChange={handleChanges}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password ..."
              name="password"
              value={values.password}
              onChange={handleChanges}
            />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Retype your password ..."
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChanges}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            block
            className="rounded-pill"
          >
            Sign up
          </Button>
          <p className="mt-2 small text-center">
            Already have an account? <Link to="/auth/sign-in">Sign in </Link>now
          </p>
        </Form>
      </Card.Body>
    </Card>
  );
};
