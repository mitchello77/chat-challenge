import { useEffect } from "react";
import MessageBubble from "./MessageBubble";

const MessageContainer = ({ messages, scrollAnchor }) => {


	const _messages = messages.slice();

	return (
		<div className="messages-container">
			<div className="messages-wrap">
				{_messages.map((message) => (
					<MessageBubble message={message} key={message.id} />
				))}
				<div ref={scrollAnchor}></div>
			</div>
		</div>
	);
};

export default MessageContainer;
