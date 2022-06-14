import React, { useEffect, useState } from "react";
import { useApi } from "hooks/useApi";
import SelectProfile from "components/users/SelectProfile";
import Loader from "components/Loader";

const Users = () => {
	const { getUsers } = useApi();
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		const { data: users } = await getUsers();
		setUsers(users);
	}

	useEffect(() => {
		fetchUsers();
	}, []);


	return (
		<div className="view" id="users">
			{users.map((user) => (
				<SelectProfile user={user} key={user.id} />
			))}
		</div>
	);
};

export default Users;
