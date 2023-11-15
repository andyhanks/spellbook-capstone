import { Route, Routes } from "react-router-dom"
import { Authorized } from "./components/views/Authorized";
import AppView from "./components/views/AppView";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
function SpellMain() {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
	


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