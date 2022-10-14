import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/contact.css'

export default function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3 email" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 user-name" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3 text-area" controlId="formBasicText">
        <Form.Label>Message</Form.Label>
        <Form.Control as ='textarea'className ='text' label="Check me out" />
      </Form.Group>
      <Button className = 'button' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}