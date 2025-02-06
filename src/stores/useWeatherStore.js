import { create } from "zustand";
import axios from "axios";

const API_URL = "http://api.weatherapi.com/v1/current.json";
const API_KEY = import.meta.env.VITE_API_KEY;

export const useWeatherStore = create((set) => ({
  weather: null,
  isLoading: false,
  error: null,

  fetchWeather: async (city) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.get(API_URL, {
        params: {
          key: API_KEY, 
          q: city,
          lang: "en",
        },
      });

      set({ weather: response.data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));



//miasto, kraj, dzien tygodnia, pogoda, temperatura, opis pogody, odczuwalna temp - glowny
//today highlit - wind status, humidity sunrise, uv index ,visibilty, sunset