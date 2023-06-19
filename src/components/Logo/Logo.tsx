import logo from 'assets/logo.svg'
import Navbar from 'react-bootstrap/Navbar'
type Props = {}
const Logo = (props: Props) => {
    return (
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
    )
}
export default Logo
