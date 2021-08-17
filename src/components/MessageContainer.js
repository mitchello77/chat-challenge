import { useEffect } from "react";
import MessageBubble from "./MessageBubble";

const MessageContainer = ({ messages, scrollAnchor }) => {
	
	const order = (a,b) => {
		return new Date(a.createdAt) - new Date(b.createdAt);
	}

	const _messages = messages.slice();

	useEffect(() => {
		setTimeout(() => {
			scrollAnchor.current.scrollIntoView({
				behavior: 'smooth',
			});
		}, 0);
	}, []);

	return (
		<div className="messages-container">
			<div className="messages-wrap">
				{_messages.sort(order).map( (message) => (
					<MessageBubble message={message} key={message.id} />
				))}
				<div ref={scrollAnchor}></div>
			</div>
		</div>
	);
};

export default MessageContainer;
