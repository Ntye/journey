'use client'
import Link from "next/link";
import {Button, Form, Col} from "react-bootstrap";

import Image from "next/image";

export default function Login() {

  return (
    <div className='centered'>
      {/*<div className='entries'>*/}
      {/*  <span className='intro-word'>LOG IN TO <span className='store'>AllStore</span></span>*/}
      {/*  <div className='note'><span className='sub-text'>If you do not have an existing account, click</span> {'  '}*/}
      {/*    <Link href="/auth/signup" className='link-deco'>Here!</Link>*/}
      {/*  </div>*/}
      {/*  <div className='entries-pic'>*/}
      {/*    <Form className="form-size" method='POST'>*/}
      {/*      <Form.Group className="user" controlId="username">*/}
      {/*        <Form.Control*/}
      {/*          name='user'*/}
      {/*          type='text'*/}
      {/*          placeholder="Username"*/}
      {/*        />*/}
      {/*      </Form.Group>*/}

      {/*      <span className='sub-text text-bel'>You can use letters, numbers and symbols</span>*/}

      {/*      <Form.Group as={Col} controlId="password">*/}
      {/*        <Form.Control*/}
      {/*          name="pwd"*/}
      {/*          type="password"*/}
      {/*          placeholder="Password"*/}
      {/*        />*/}
      {/*      </Form.Group>*/}

      {/*      <br/>*/}
      {/*      <Button className='custom-button' variant="secondary" type="submit">*/}
      {/*        Login*/}
      {/*      </Button>*/}
      {/*    </Form>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="lay">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="logo"
          width={300}
          height={440}
          priority
        />
        <Image
          src="/connexion-page.jpeg"
          alt="YO"
          className="rounded-image"
          width={150}
          height={60}
        />
      </div>

      <div>
        <span className='intro-word'>LOG IN TO <span className='store'>AllStore</span></span>
        <div className='note mb-3'><span className='sub-text'>If you do not have an existing account, click</span> {'  '}
          <Link href="/auth/signup" className='link-deco'>Here!</Link>
        </div>
        <Form className="form-size" method='POST'>
          <Form.Group className="user" controlId="username">
            <Form.Control
              name='user'
              type='text'
              placeholder="Username"
            />
          </Form.Group>

          <span className='sub-text text-bel'>You can use letters, numbers and symbols</span>

          <Form.Group as={Col} controlId="password">
            <Form.Control
              name="pwd"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <br/>
          <Button className='custom-button' variant="secondary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  )
}
