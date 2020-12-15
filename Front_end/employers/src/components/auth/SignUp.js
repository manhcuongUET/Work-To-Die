import React, { useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoadingSign } from "../../share/LoadingIndicator";
import axiosInstance from "../../utils/axios";

export const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    field: "",
    location: "",
    website: "",
    overview: "",
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
    if (!values.email) {
      setErr("Email cannot be empty!");
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
      await axiosInstance.post("/employers/sign-up", values);
      setIsSuccessced(true);
      axiosInstance.post("/employers/new-company", {
        name: values.companyName,
        field: values.field,
        location: values.location,
        website: values.website,
        overview: values.overview,
        imgUrl: "",
        emailApply: [],
      });
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
          <LoadingSign text="Signing Up..." />
        ) : (
          <>
            {err ? <Alert variant="danger">{err}</Alert> : null}
            {isSuccessded && (
              <Alert variant="success">Sign up successfully</Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email ..."
                  name="email"
                  value={values.email}
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
                <Form.Group controlId="formUsername">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Company Name ..."
                    name="companyName"
                    value={values.companyName}
                    onChange={handleChanges}
                  />
                </Form.Group>
              </Form.Group>
              <Form.Group controlId="formUsername">
                <Form.Label>Field</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter field ..."
                  name="field"
                  value={values.field}
                  onChange={handleChanges}
                />
              </Form.Group>
              <Form.Group controlId="formUsername">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location ..."
                  name="location"
                  value={values.location}
                  onChange={handleChanges}
                />
              </Form.Group>
              <Form.Group controlId="formUsername">
                <Form.Label>Website</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Enter website ..."
                  name="website"
                  value={values.website}
                  onChange={handleChanges}
                />
              </Form.Group>

              <Form.Group controlId="formUsername">
                <Form.Label>Overview</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter overview ..."
                  name="overview"
                  value={values.overview}
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
                <Link to="/employers/sign-in">Sign in </Link>now
              </p>
            </Form>
          </>
        )}
      </Card.Body>
    </Card>
  );
};
