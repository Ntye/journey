// import Link from "next/link";
//
// export default function Profile() {
//   return (
//     <>
//       <p>Profile</p>
//       <Link href="/">Go to Home</Link>
//     </>
//
//   )
// }
'use client'
// import React from 'react';
// import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
// import '../../styles/navbar.css';
//
// const MyNavbar = () => {
//   return (
//     <Navbar bg="white" expand="lg" className="py-3 z-index-3">
//       <Container>
//         <Navbar.Brand
//           href="https://demos.creative-tim.com/material-kit-pro/index"
//           target="_blank"
//           title="Designed and Coded by Creative Tim"
//         >
//           Material Kit 2 PRO
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mx-auto">
//             <NavDropdown title="Pages" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#">Another action</NavDropdown.Item>
//               <NavDropdown.Item href="#">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Account" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#">Another action</NavDropdown.Item>
//               <NavDropdown.Item href="#">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Blocks" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#">Another action</NavDropdown.Item>
//               <NavDropdown.Item href="#">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Docs" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#">Another action</NavDropdown.Item>
//               <NavDropdown.Item href="#">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Button
//             variant="primary"
//             className="btn-sm mb-0 me-1"
//             href="https://www.creative-tim.com/product/material-design-system-pro#pricingCard"
//           >
//             Buy Now
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };
//
// export default MyNavbar;


import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import '../../styles/navbar.css';

const MySection = () => {
  return (
    <section className="py-7">
      <Container>
        <Row>
          <Col lg={4} className="mx-auto">
            <div className="nav-wrapper position-relative end-0">
              <Nav variant="pills" className="nav-fill p-1" defaultActiveKey="#profile-tabs-simple">
                <Nav.Item>
                  <Nav.Link href="#profile-tabs-simple" active>
                    My Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#dashboard-tabs-simple">
                    Dashboard
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MySection;

