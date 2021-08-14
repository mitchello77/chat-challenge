import { useState } from 'react';
import { useApi } from "hooks/useApi";
import { useAuth } from 'hooks/useAuth';

const useUsers = () => {

	const [ messages, setMessages ] = useState([]);
	const [ fetching, setFetching ] = useState(true);

	const { getMessages } = useApi();
	const { currentUser } = useAuth();


	const fetchMessages = async () => {
		setFetching(true);
		const {data: messages} = await getMessages();
		console.log(messages);
		setMessages(messages);
		setFetching(false);
	}


	const create = (messageText) => {
		setMessages([
			...messages,
			{
				userID: currentUser.id,
				message: messageText,
				createdAt: new Date().toISOString()
			}
		]);
	};

	const update = (updateMessage) => {

	};

	const remove = (deletedMessage) => {

	};

	return {
		fetching,
		fetchMessages,
		messages,
		setMessages,
		create,
		update,
		remove
	};
};

export default useUsers;
