import { Link, useNavigate } from "react-router-dom"
export const Logout = () => {
    const navigate = useNavigate()
 return <ul className="navbar">
    {
        localStorage.getItem("activeUser")
            ? <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="/" onClick={() => {
                    localStorage.removeItem("activeUser")
                    navigate("/login", {replace: true})
                }}><button className="btn btn-primary">Logout</button></Link>
            </li>
            : ""
    }
</ul>
}