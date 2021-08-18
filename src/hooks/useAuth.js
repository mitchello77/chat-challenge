
import { createContext, useContext, useState } from "react"

/**
 * @typedef {Object} User
 * @property {string} createdAt
 * @property {string} avatar
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} id
 */

/**
 * @typedef {Object} useUser
 * @property {User} currentUser
 * @property {function} setCurrentUser
 */


const authContext = createContext();

export function AuthProvider({ children }) {
	const auth = useProvideAuth();
	 
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

/**
 * @return {useUser} 
 */
 export const useAuth = () => {
	return useContext(authContext);
};

function useProvideAuth() {
	
	const [currentUser, setCurrentUser] = useState(null);

	return {
		currentUser,
		setCurrentUser
	}
}