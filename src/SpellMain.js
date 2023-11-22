import { Route, Routes } from "react-router-dom"
import { Authorized } from "./components/views/Authorized";
import AppView from "./components/views/AppView";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";
import { Logout } from "./components/nav/Logout";


function SpellMain() {
	return (
		<Routes>

<Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
	<Route path="logout" element={<Logout/>}/>


			<Route
				path='*'
				element={
					<Authorized>
						<>
							
							<AppView />
						</>
					</Authorized>
				}
			/>
		</Routes>
	);
}

export default SpellMain;