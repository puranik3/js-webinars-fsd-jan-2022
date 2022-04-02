import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';


const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand to="/home" as={NavLink}>
                    <FontAwesomeIcon icon={faBook} className="me-2" />
                    Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-links" />
                <Navbar.Collapse id="main-links">
                    <Nav>
                        <Nav.Link to="/libraries" as={NavLink}>Libraries</Nav.Link>
                        <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Navigation;