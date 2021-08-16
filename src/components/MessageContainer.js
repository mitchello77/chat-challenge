import MessageBubble from "./MessageBubble";

const MessageContainer = ({ messages }) => {
	
	const order = (a,b) => {
		return new Date(a.createdAt) - new Date(b.createdAt);
	}

	const _messages = messages.slice();

	return (
		<div className="messages-container">
			{_messages.sort(order).map( (message) => (
				<MessageBubble message={message} />
			))}
		</div>
	);
};

export default MessageContainer;
