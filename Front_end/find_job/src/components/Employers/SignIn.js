import React from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoadingSign } from "../../share/LoadingIndicator";
import axios from "../../utils/axios";
import authCtx from "../../context/auth";

export const SignInEmployers = () => {
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
