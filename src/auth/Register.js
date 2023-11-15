import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeNewUser } from "./AuthAPIManager";






export const Register = (props) => {
	const [user, setUser] = useState({
		email: "",
		password: "",
		name: "",
	});
	let navigate = useNavigate();

	const registerNewUser = () => {
		return makeNewUser(user)
			.then((res) => res.json())
			.then((createdUser) => {
				if (createdUser.hasOwnProperty("id")) {
					localStorage.setItem(
						"activeUser",
						JSON.stringify({
							id: createdUser.id,
							email: createdUser.email,
							password: createdUser.password,
							name: createdUser.name,
						})
					);

					navigate("/");
				}
			});
	};



};