import { useAuth } from "hooks/useAuth";


const MessageBubble = ({ message }) => {
	const { currentUser } = useAuth();

	const direction = (currentUser.id === message.id) ? "mine" : "other";
	return (
		<div className={`message-bubble ${direction}`}>
			{message.message}
		</div>
	);
};

export default MessageBubble;
