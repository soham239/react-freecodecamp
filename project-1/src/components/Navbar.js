import logo from "../images/react-icon-small.png";

function Navbar() {
  return (
    <nav>
        <img src={logo} alt="React Logo" className="nav--icon" />
        <h3 className="nav--logo_text">React Facts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar;
