import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import { Logout } from "./Logout"

//exports the links in the Admin navigation bar
export const AppViewNav = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
             <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" ><Logout/></Link>
            </li>


        </ul>
    )
}












