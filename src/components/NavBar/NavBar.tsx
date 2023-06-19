import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

type Props = {}
const NavBar = (props: Props) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About Me</Nav.Link>
                            <NavDropdown title="Live" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#moments">
                                    Moments
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#nature">
                                    Nature
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#stories">
                                    Stories
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#all">
                                    All
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#travel">Travel</Nav.Link>
                        </Nav>
                        <div className="like-box"></div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar
