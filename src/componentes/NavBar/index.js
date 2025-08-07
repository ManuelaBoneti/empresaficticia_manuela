import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
    <div className="navbar">
        <Link to = "/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = "/servicos">Serviços</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = "/contato">Contato</Link>
    </div>
    )
}

export default NavBar