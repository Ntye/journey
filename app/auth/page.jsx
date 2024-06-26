'use client'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/auth.css';
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { GlobalContext } from '@/app/context/GlobalContext'
import axiosInstance from '@/components/axios'
import { verifytoken } from '@/components/axios'

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [user,setUser] = useState()

  const { isAuthenticated, setIsAuthenticated } = useContext(GlobalContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const formData = {
      email: form.get('email'),
      password: form.get('password')
    };
    try {
      console.log(formData)
      axiosInstance.post("/v1/auth/login", formData).then(response => {
        if (response.status === 200) {
          localStorage.setItem('token',response.data.token);
          const token = localStorage.getItem('token');
          setIsAuthenticated({
            auth: true,
            token: token
          })
          console.log(isAuthenticated)
          router.push("/")
        }else {
          console.log('error',response)
          setIsAuthenticated({
            auth: false,
            token: ""
          });
          localStorage.removeItem('token');
        }
      })
      // router.push('/');
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    verifytoken({setIsAuthenticated,router,setIsLoading})
  }, [setIsAuthenticated,router,setIsLoading,setUser])


  if(isLoading) {
    return (<div>is loading ....</div>)
  }


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
          <Form onSubmit={handleSubmit} className="form-form text-part">
            <Form.Group controlId="login-username" className="mb-3">
              <Form.Control type="email" name="email" placeholder="Email" required/>
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
