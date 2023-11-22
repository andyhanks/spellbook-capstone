import "./NavBar"
import { AppViewNav } from "./Nav";
//on line 13 the logout link is built. Line 15 has a custom onClick. Removing the item from local storage the item called honey_user then redirecting the user back to the baseroute of the application.
export const NavBar = () => {
  //get the honeyUser out of storage login
  const localActiveUser = localStorage.getItem("activeUser")
  const activeUserObject = JSON.parse(localActiveUser)

    return <AppViewNav/>;
}

