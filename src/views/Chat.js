import { useAuth } from "hooks/useAuth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import MessageContainer from "components/MessageContainer";
import MessageForm from "components/MessageForm";
import useMessages from "hooks/data/useMessages"

const Chat = () => {
	
	const history = useHistory();
	const { currentUser } = useAuth();
	const { messages, fetchMessages, fetching } = useMessages()
	




	useEffect(() => {
		if (currentUser === null) {
			history.push('/users');
		} 
	}, [currentUser]);

	useEffect(() => {
		if (currentUser !== null) {
			fetchMessages();
		};
	}, []);

	if (fetching) {
		return (<div>Loading...</div>)
	}

	return (
		<div className="view" id="chat">
			<MessageContainer messages={messages}/>
			<MessageForm />

		</div>
	);
};

export default Chat;
