import { useState } from 'react';
import { useApi } from "hooks/useApi";
import { useAuth } from 'hooks/useAuth';
import { useRecoilState } from 'recoil';
import { messagesState } from 'atoms/messages';

const useMessages = () => {

	const [ messages, setMessages ] = useRecoilState(messagesState);
	const [ fetching, setFetching ] = useState(true);

	const { getMessages } = useApi();
	const { currentUser } = useAuth();


	const fetchMessages = async () => {
		setFetching(true);
		const {data: _messages} = await getMessages();
		setMessages(_messages);
		setFetching(false);
	}


	const create = async (messageText) => {
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
		setMessages,
		create,
		update,
		remove
	};
};

export default useMessages;
