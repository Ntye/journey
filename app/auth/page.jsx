'use client'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/auth.css';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
  return (
    <Container className="authContainer">
      <Row className="formContent">
        <Col md={6} className="imageContent coloured-content">
          <Image
            src="/login.svg"
            alt="Login"
            width={1000}
            height={100}
            className="image"
          />
        </Col>
        <Col md={6} className="entries">
          <h2 className="noticia-text-regular heading text-part mb-5">Login </h2>
          <Form className="form-form text-part">
            <Form.Group controlId="login-username" className="mb-3">
              <Form.Control type="text" name="username" placeholder="Username" required/>
            </Form.Group>
            <Form.Group controlId="login-password" className="mb-3">
              <Form.Control type="password" name="password" placeholder="Password" required/>
            </Form.Group>
            <Button type="submit" className="submit-button"><strong>Login</strong></Button>
            <br/><br/>
            <span className="auth-texts">Don't have an account yet? <Link href="/auth/signup" className="auth-text"><strong>SIGN UP</strong></Link></span>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
