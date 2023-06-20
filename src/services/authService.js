import axios from "axios";
import { appUrl } from "./config";

export const login = async (username, password) => {
  try {
    const { data } = await axios.post(`${appUrl}/auth/login`, {
      username,
      password,
    });
    return data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred during login.");
    }
  }
};

export const register = async (firstName, lastName, username, password, roleId, centerVoters) => {
  try {
    const { data } = await axios.post(`${appUrl}/auth/register`, {
      firstName, lastName, username, password, roleId, centerVoters
    });
    return data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred during login.");
    }
  }
};
