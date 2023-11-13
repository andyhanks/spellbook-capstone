export const getUserEmail = (email) => {
	return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
		res.json()
	);
};

export const makeNewUser = (user) => {
	return fetch("http://localhost:8088/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});
};