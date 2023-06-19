import Logo from 'components/Logo/Logo'
import NavBar from 'components/NavBar/NavBar'
type Props = {}
const Header = (props: Props) => {
    return (
        <>
            <div className="logo-line">
                <div className="logo-wrap">
                    <Logo />
                </div>
            </div>
            <div className="nav-bar">
                <NavBar />
            </div>
        </>
    )
}
export default Header
