import profileImage from './user.png'

export const ProfileImage = ({size = 100, src = null, name = ''}) => {
	
	return (
		<div className="profile-image" style={{
			width: `${size}px`,
			height: `${size}px`,
		}}>
			<img src={src || profileImage} alt={name} />
		</div>
	);
}

export const ProfileName = ({firstName = '', lastName = ''}) => {

	return (
		<div className="profile-name">
			<div className="first-name">{firstName}</div>
			<div className="last-name">{lastName}</div>
		</div>
	);
}