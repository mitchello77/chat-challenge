import MessageBubble from "./MessageBubble";

const MessageContainer = ({ messages }) => {
	
	const order = (a,b) => {
		return new Date(b.createdAt) - new Date(a.createdAt);
	}

	return (
		<div className="messages-container">
			{messages.sort(order).map( (message) => (
				<MessageBubble message={message} />
			))}
		</div>
	);
};

export default MessageContainer;
