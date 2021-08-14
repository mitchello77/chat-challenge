import React from "react";
import { ProfileImage, ProfileName } from "components/Profile";
import { useAuth } from "hooks/useAuth";
import { useHistory } from "react-router-dom";




const SelectProfile = ({user}) => {
	const { setCurrentUser } = useAuth();
	const history = useHistory();


	const onProfileClick = () => {
		setCurrentUser(user);
		history.push('/chat');
	}

	return (
		<div className="profile" onClick={onProfileClick}>
			<ProfileImage src={user.avatar} name={`${user.firstName} ${user.lastName}`}/>
			<ProfileName firstName={user.firstName} lastName={user.lastName}/>
		</div>
	);
};

export default SelectProfile;
