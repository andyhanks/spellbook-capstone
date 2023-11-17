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

	const handleRegister = (e) => {
		e.preventDefault();
		return fetch(`http://localhost:8088/users?email=${user.email}`)
			.then((res) => res.json())
			.then((response) => {
				if (response.length > 0) {
					// Duplicate email. No good.
					window.alert("Account with that email address already exists");
				} else {
					// Good email, create user.
					registerNewUser();
				}
			});
	};

	const updateUser = (evt) => {
		const copy = { ...user };
		copy[evt.target.id] = evt.target.value;
		setUser(copy);
	};

	return (
		<main style={{ textAlign: "center" }}>
			<form className='form--login' onSubmit={handleRegister}>
				<h1 className='h3 mb-3 font-weight-normal'>
					Please Register for Nutshell
				</h1>
				<fieldset>
					<label htmlFor='fullName'> Full Name </label>
					<input
						onChange={updateUser}
						type='text'
						id='fullName'
						className='form-control'
						placeholder='Enter your name'
						required
						autoFocus
					/>
				</fieldset>
				<fieldset>
					<label htmlFor='email'> Email address </label>
					<input
						onChange={updateUser}
						type='email'
						id='email'
						className='form-control'
						placeholder='Email address'
						required
					/>
				</fieldset>
				<fieldset>
					<label htmlFor='password'> Password </label>
					<input
						onChange={updateUser}
						type='text'
						id='password'
						className='form-control'
						placeholder='Create password'
						required
					/>
				</fieldset>

				<fieldset>
					<button type='submit'> Register </button>
				</fieldset>
			</form>
		</main>
	);
};