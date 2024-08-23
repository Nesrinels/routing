import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Nave2() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/dashboard">dashboard</Nav.Link>
            <Nav.Link href="/songs">songs</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
     

    </>
  );
}

export default Nave2;