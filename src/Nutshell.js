import { Route, Routes } from "react-router-dom"
import { Authorized } from "./components/views/Authorized";
import AppView from "./components/views/AppView";
function Nutshell() {
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

export default Nutshell;