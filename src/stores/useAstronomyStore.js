import { create } from "zustand";
import axios from "axios";

const API_URL = "https://api.weatherapi.com/v1/astronomy.json";
const API_KEY = import.meta.env.VITE_API_KEY;

export const useAstronomyStore = create((set) => ({
  astronomy: null,
  isLoading: false,
  error: null,

  fetchAstronomy: async (city) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.get(API_URL, {
        params: {
          key: API_KEY, 
          q: city,
          lang: "en",
        },
      });

      set({ astronomy: response.data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));