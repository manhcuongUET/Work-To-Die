import React from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoadingSign } from "../../share/LoadingIndicator";
import axios from "../../utils/axios";
import authCtx from "../../context/auth";

export const SignUpEmployers = () => {
  return (
    <Card className="mt-5">
      <Card.Header>Sign up</Card.Header>
      <Card.Body>
        {loading ? (
          <LoadingSign text="Signing Up..." />
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
