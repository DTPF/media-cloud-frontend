import { IDauthUser } from "interfaces/user.interface";
import { basePath } from "./utils/config";

/**
 * Updates a user's information.
 * @param user - The partial user object containing the updated information.
 * @param token - The authorization token for the request.
 * @returns A promise that resolves to an object containing the response and data from the API.
 */
export const updateUserAPI = async (user: Partial<IDauthUser>, token: string): Promise<any> => {
	const params = {
		method: "PATCH",
		headers: {
			Authorization: token,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	}
	const response = await fetch(`${basePath}/update-user`, params)
	const data = await response.json()
	return { response, data }
}