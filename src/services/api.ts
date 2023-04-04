import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

axios.defaults.baseURL = API_BASE_URL;

export interface IUser {
  name: string;
  login: string;
  bio: string;
  followers: { totalCount: number };
}

export default {
  getMostFollowedUsers: async (country: string) => {
    try {
      const response = await axios.get<IUser[]>(
        `/most_followed_users?country=${country}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error(
        `Error retrieving most followed users for country ${country}: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  },
};
