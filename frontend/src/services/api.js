// src/services/api.js
import axios from "axios";

// Base URL of backend
const API_URL = "http://localhost:5000/api";

// Example function to get coins
export const fetchCoins = async () => {
  try {
    const response = await axios.get(`${API_URL}/coins`);
    return response.data;  // ye coins ka data return karega
  } catch (error) {
    console.error("Error fetching coins:", error);
    return [];
  }
};

// Example function to add a coin
export const addCoin = async (coin) => {
  try {
    const response = await axios.post(`${API_URL}/coins`, coin);
    return response.data;
  } catch (error) {
    console.error("Error adding coin:", error);
    return null;
  }
};
