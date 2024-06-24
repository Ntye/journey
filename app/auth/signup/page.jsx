'use client'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../../styles/auth.css';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Signup() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const formData = {
      name: form.get('name'),
      username: form.get('username'),
      email: form.get('email'),
      password: form.get('password'),
      confirmationPassword: form.get('confirmationPassword'),
      mobile: form.get('mobile'),
      dateOBirth: form.get('dateOBirth'),
      sex: form.get('sex')
    };

    if (formData.pwd !== formData.confpwd) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("Signup successful!");
    } else {
      alert("Signup failed");
    }
  };


  return (
    <Container className="authContainer signup-format">
      <Row className="formContent ">
        <Col md={6} className="signup-content">
          <h2 className="noticia-text-regular heading text-part ">Sign Up</h2>
          <Form className="form-form text-part" onSubmit={handleSubmit}>
            <Form.Control
              name="name"
              type="text"
              placeholder="Name"
              className="mb-3 mt-8"
              required
            />

            <Form.Group controlId="signup-username">
              <Form.Control
                type="text"
                name="username"
                placeholder="Username"
                className="mb-3"
                required
              />
            </Form.Group>

            <Form.Group controlId="signup-email">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                className="mb-3"
                required
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="Password">
                <Form.Control
                  name="pwd"
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="Confirmation-password">
                <Form.Control
                  name="confimationPassword"
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="Numero">
              <Form.Control
                name="mobile"
                type="text"
                placeholder="Telephone Number"
                className="mb-3"
                required
              />
            </Form.Group>

            <span className="auth-texts m-lg-2" >Date of Birth</span>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="Date">
                <Form.Control
                  name="dateOBirth"
                  type="date"
                  placeholder="Date de naissance"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="Sexe">
                <Form.Select name='sexe' required>
                  <option value="">Gender</option>
                  <option value ="0" type='text'>Male</option>
                  <option value ="1" type='text'>Female</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Button type="submit" className="submit-button"><strong>Sign Up</strong></Button>
            <br/><br/>
            <span className="auth-texts">Already have an account? <Link href="/auth" className="auth-text"><strong>LOGIN</strong></Link></span>
          </Form>
        </Col>
        <Col md={6} className="imageContent">
          <Image
            src="/signup.svg"
            alt="Signup"
            width={500}
            height={100}
            className="image signup-image"
          />
        </Col>
      </Row>
    </Container>
  );
}
