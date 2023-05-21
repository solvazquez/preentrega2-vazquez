import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";
import Logo from '../Img/logo.png'

const NavBar = () => {

    return (
        <header>
            <Link to={"/"}>
                <img className="imgLogo" src={Logo} alt="Logo Marolio" />
            </Link>
            <ul>
                <li>
                    <NavLink className="categoria" to={`/categoria/2`}>Misterio</NavLink>
                </li>

                <li>
                    <NavLink className="categoria" to={`/categoria/3`} >Fantasía</NavLink>
                </li>

                <li>
                    <NavLink className="categoria" to={`/categoria/4`} >No Ficción</NavLink>
                </li>

            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar