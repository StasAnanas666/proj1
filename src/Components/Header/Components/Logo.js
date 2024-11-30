import logo from "./logo.png"

function Logo() {
    return (
        <a className="navbar-brand" href="#">
            <img width="50px" src={logo} alt="logo" />
        </a>
    )
}

export default Logo;