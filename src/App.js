import React from 'react'
import {Navbar, Container,Nav ,Card} from 'react-bootstrap';
import ceo from './Images/react+bootstrap.jpg';
import  ay from './Images/react pic2.png';  
import az from './Images/react-ReactBootstrap.png';




function App() {
  return (
    <div className="App">
      <>
      <Navbar bg="dark"  variant="dark" expand="lg">
        <Navbar.Brand href="#">React boostrap</Navbar.Brand>
        <Navbar.Toggle ari-controls="navbar-nav"/>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.link href="#">Home</Nav.link>
            <Nav.link href="#">About</Nav.link>
            <Nav.link href="#">Services</Nav.link>
            <Nav.link href="#">Contact</Nav.link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className="mt-4 md-4">
          <h1>React Boostrap Heading</h1>

          <div className="row">
            <div className="col md-4">
              <Card>
                <Card.Img className='h-30' variant="top" src={ceo}/>
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>
                    This is the content of Card 1.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>

                <Card.Img variant="top" src={az}/>
                <Card.Body>
                  <Card.Title>Card </Card.Title>
                  <Card.Text>
                    This is the content of Card 2.
                  </Card.Text>
                </Card.Body>
              
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
                <Card.Img variant="top" src={az}/>
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>
                    This is the content of Card 3.
                  </Card.Text>
                </Card.Body>
              </Card >
              </div>
            </div>
            </Container>
      </>
    </div>
    
  );
}


export default App;
