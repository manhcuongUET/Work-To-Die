import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoadingSign } from "../../share/LoadingIndicator"; 
import axios from "../../utils/axios";

export const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [err, setErr] = useState(null);
  const [isSuccessded, setIsSuccessced] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErr(null);
    setIsSuccessced(false);
    if (!values.username) {
      setErr("Username cannot be empty!");
      return;
    }
    if (!values.password) {
      setErr("Password cannot be empty!");
      return;
    }
    if (values.confirmPassword !== values.password) {
      setErr("Confirm Password not matched!");
      return;
    }
    setLoading(true);
    try {
      await axios.post("/auth/sign-up", values);
      setIsSuccessced(true);
    } catch (err) {
      setErr(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card className="mt-5">
      <Card.Header>Sign up</Card.Header>
      <Card.Body>
        {loading ? (
          <LoadingSign text="Signing Up..."/>
        ) : (
          <>
            {err ? <Alert variant="danger">{err}</Alert> : null}
            {isSuccessded && (
              <Alert variant="success">Sign up successfully</Alert>
            )}
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
                Already have an account?{" "}
                <Link to="/auth/sign-in">Sign in </Link>now
              </p>
            </Form>
          </>
        )}
      </Card.Body>
    </Card>
  );
};
