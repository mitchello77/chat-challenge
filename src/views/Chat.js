import { useAuth } from "hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { messagesState } from "atoms/messages";
import Loader from "components/Loader";
import MessageContainer from "components/MessageContainer";
import MessageForm from "components/MessageForm";
import useMessages from "hooks/data/useMessages"

const Chat = () => {
	
	const history = useHistory();
	const { currentUser } = useAuth();
	const { fetchMessages, fetching } = useMessages()
	const messages = useRecoilValue(messagesState);
	const scrollAnchor = useRef(null);



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
		if (scrollAnchor.current !== null && messages.length > 0) {
			scrollAnchor.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}, [messages]);

	if (fetching || messages.length === 0) {
		return <Loader />
	}

	return (
		<div className="view" id="chat">
			<MessageContainer messages={messages} scrollAnchor={scrollAnchor}/>
			<MessageForm />

		</div>
	);
};

export default Chat;
