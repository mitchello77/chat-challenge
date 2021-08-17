import axios from "axios";

/**
 * @typedef {Object} API
 * @property {function} getUsers
 * @property {function} getMessages
 */

/**
 * @return {API} 
 */
export function useApi() {
	const getUsers = () => {
		return axios.get('https://610b713652d56400176b0255.mockapi.io/users');
	}

	const getMessages = () => {
		return axios.get('https://610b713652d56400176b0255.mockapi.io/messages');
	}

	return {
		getUsers,
		getMessages,
	}
}