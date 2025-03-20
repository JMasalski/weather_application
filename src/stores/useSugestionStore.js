import { create } from "zustand";
import axios from "axios";

const API_URL = "https://api.weatherapi.com/v1/search.json";
const API_KEY = import.meta.env.VITE_API_KEY;

export const useSugestionStore = create((set) => ({
  suggestions: [],
  fetchSugesstions: async (query) => {
    try {
      const res = await axios.get(API_URL, {
        params: {
          key: API_KEY,
          q: query,
        },
      });

      const suggestions = res.data.map((item) => ({
        name: item.name,
        country: item.country,
      }));

      set({ suggestions });
    } catch (error) {
      console.error(error);
    }
  },
  setSuggestions: (suggestions) => set({ suggestions }),
}));