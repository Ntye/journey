'use client'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../../styles/auth.css';
import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { GlobalContext } from '@/app/context/GlobalContext'
import axiosInstance from '@/components/axios'

export default function Signup() {
  const router = useRouter();

  const { isAuthenticated, setIsAuthenticated } = useContext(GlobalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);



    const formData = {
      name: form.get('firstname'),
      username: form.get('lastname'),
      email: form.get('email'),
      password: form.get('password'),
      confirmationPassword: form.get('confirmationPassword'),
      mobile: form.get('tel'),
      dateOBirth: form.get('dob'),
      sex: form.get('sex')
    };

    if (formData.password !== formData.confirmationPassword) {
      formData.delete('confirmationPassword');
      alert("Passwords do not match");
      // return;
    }
    else {
      const token = "example-token";
      setIsAuthenticated({
        auth: true,
        token: token
      });
      console.log(isAuthenticated)
      router.push('/');
    }
  };


  return (
    <Container className="authContainer signup-format">
      <Row className="formContent ">
        <Col md={6} className="signup-content">
          <h2 className="noticia-text-regular heading text-part ">Sign Up</h2>
          <Form className="form-form text-part" onSubmit={handleSubmit}>
            <Form.Control
              name="firstname"
              type="text"
              placeholder="First Name"
              className="mb-3 mt-8"
              required
            />

            <Form.Group controlId="signup-username">
              <Form.Control
                type="text"
                name="lastname"
                placeholder="Last Name"
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
                  name="password"
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
                name="tel"
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
                  name="dob"
                  type="date"
                  placeholder="Date de naissance"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="Sexe">
                <Form.Select name='sexe' required>
                  <option value="">Gender</option>
                  <option value ="0">Male</option>
                  <option value ="1">Female</option>
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
