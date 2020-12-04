import React from "react";

export const SignIn = () => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Sign in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username ..." />
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
      </Modal.Body>
    </Modal.Dialog>
  );
};
