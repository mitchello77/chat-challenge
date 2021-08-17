import React, { useEffect, useState } from "react";
import { useApi } from "hooks/useApi";
import SelectProfile from "components/users/SelectProfile";
import Loader from "components/Loader";

const Users = ({setUser}) => {
	const { getUsers } = useApi();
	const [ loading, setLoading ] = useState(true);
	const [ users, setUsers ] = useState([]);

	const fetchUsers = async () => {
		const {data: users} = await getUsers();
		setUsers(users);
		setLoading(false);
	}

	useEffect(() => {
		fetchUsers();
	}, []);

	if (loading) {
		return <Loader />
	}

	return (
		<div className="view" id="users">
			{users.map( (user) => (
				<SelectProfile user={user} key={user.id} />
			))}
		</div>
	);
};

export default Users;
