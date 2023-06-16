import { Container, Nav, Navbar, } from 'react-bootstrap';
import './NavBar.css'

function CollapsibleExample() {
  return (
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="#home">ProjectSync</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#kanban">KanBan</Nav.Link>
    //         <Nav.Link href="#gchart">Gantt Chart</Nav.Link>
            
    //       </Nav>
    //       <Nav>
    //         <Nav.Link href="#deets">More deets</Nav.Link>
    //         <Nav.Link eventKey={2} href="#memes">
    //           Dank memes
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ProjectSync</Navbar.Brand>
        <div>
          <Nav className="me-auto">
            <Nav.Link className='nav__links' href="#one">One</Nav.Link>
            <Nav.Link className='nav__links' href="#two">Two</Nav.Link>
            <Nav.Link className='nav__links' href="#three">Three</Nav.Link>
          </Nav>
        </div>
          
        </Container>
      </Navbar>
  );
}

export default CollapsibleExample;