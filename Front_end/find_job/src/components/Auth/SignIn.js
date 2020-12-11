import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoadingSign } from "../../share/LoadingIndicator";
import axios from "../../utils/axios";

export const SignIn = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErr(false);
    if (!values.username || !values.password) {
      setErr("Username & password cannot be empty");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post("/auth/sign-in", values);
      const {jwt} = res.data;
      localStorage.setItem("jwt", jwt)
    } catch (err) {
      setErr(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mt-5">
      <Card.Header>SIGN IN</Card.Header>
      <Card.Body>
        {loading ? (
          <LoadingSign text="Signing In..." />
        ) : (
          <>
            {err ? <Alert variant="danger">{err}</Alert> : null}
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
          </>
        )}
      </Card.Body>
    </Card>
  );
};
