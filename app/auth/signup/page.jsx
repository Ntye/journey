'use client'
import Link from "next/link";
import {Button, Form, Row, Col} from "react-bootstrap";
import "../../styles/auth.css"

export default function Signup() {

  return (
    <div className='centered'>
      <div className='entries'>
        <span className='intro-word'>CREATE AN ACCOUNT ON <span className='store'>AllStore</span></span>
        <div className='note'><span className='sub-text'>If you already have an existing account, click</span> {'  '}
          <Link href="/auth" className='link-deco'>Here!</Link>
        </div>
        <br/>

        <div className='entries-pic'>

          <Form className="form-size" method='POST'>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="Name">
                <Form.Control name="nom" type="text" placeholder="Nom"/>
              </Form.Group>

              <Form.Group as={Col} controlId="Surname">
                <Form.Control name="prenom" type="text" placeholder="Prenom"/>
              </Form.Group>
            </Row>

            <span className='sub-text text-bel'>Vous pouvez utiliser les lettres les chiffres et les symboles </span>
            <Form.Group className="user" controlId="username">
              <Form.Control
                name='user'
                type='text'
                placeholder="Nom d'utilisateur"
              />
            </Form.Group>

            <Row className="pass">
              <Form.Group as={Col} controlId="Pwd">
                <Form.Control name="pwd" type="password" placeholder="Password"/>
              </Form.Group>

              <Form.Group as={Col} controlId="Confirmation-pwd">
                <Form.Control name="confpwd" type="password" placeholder="Confirm Password"/>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                name='email'
                type='text'
                placeholder="Email"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="Numero">
                <Form.Control name="mobile" type="text" placeholder="Numero"/>
              </Form.Group>

              <Form.Group as={Col} controlId="Ville">
                <Form.Select name="idVille" defaultValue="Ville">
                  <option value=''>Ville</option>

                </Form.Select>
              </Form.Group>
            </Row>

            <span className='sub-text text-bel'>Date de Naissance </span>
            <Row className="mb-6">
              <Form.Group as={Col} controlId="Date">
                <Form.Control name="dateNaiss" type="date" placeholder="Date de naissance"/>
              </Form.Group>

              <Form.Group as={Col} controlId="Sexe">
                <Form.Select name='sexe'>
                  <option value="">Sexe</option>
                  <option value="0"> Homme</option>
                  <option value="1">Femme</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Link href="http://192.168.43.4:5173">
              <Button className='custom-button' variant="secondary" type="submit" value="SEND">
                Inscrivez Vous
              </Button>
            </Link>
            <br/>
            <br/>
          </Form>

          {/*<Image*/}
          {/*  src="/connexion-page.jpeg"*/}
          {/*  alt="YO"*/}
          {/*  className="rounded-image"*/}
          {/*  width={220}*/}
          {/*  height={420}*/}
          {/*/>*/}
        </div>
      </div>
    </div>
  )
}
