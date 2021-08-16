import { useAuth } from "hooks/useAuth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { messagesState } from "atoms/messages";

import MessageContainer from "components/MessageContainer";
import MessageForm from "components/MessageForm";
import useMessages from "hooks/data/useMessages"

const Chat = () => {
	
	const history = useHistory();
	const { currentUser } = useAuth();
	const { fetchMessages, fetching } = useMessages()
	const messages = useRecoilValue(messagesState);




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

	useEffect(() => {
		console.log(messages);
	}, [messages]);

	if (fetching || messages.length === 0) {
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
