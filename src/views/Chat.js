import { useAuth } from "hooks/useAuth";
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { messagesState } from "atoms/messages";
import Loader from "components/Loader";
import MessageContainer from "components/MessageContainer";
import MessageForm from "components/MessageForm";
import useMessages from "hooks/data/useMessages"

const BackLink = () => {
	const { setCurrentUser } = useAuth();
	const history = useHistory();

	const onClick = () => {
		history.push('/users');
		setCurrentUser(null);
	};

	return (
		<span className="back-button" onClick={onClick}>Back</span>
	)
};


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

	if (fetching) {
		return <Loader />
	}

	return (
		<div className="view" id="chat">
			<MessageContainer messages={messages} scrollAnchor={null} />
			<MessageForm />
			<BackLink />
		</div>
	);
};

export default Chat;
