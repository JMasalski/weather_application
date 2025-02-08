import { create } from "zustand";
import axios from "axios";

const API_URL_CURRENT = "http://api.weatherapi.com/v1/current.json";

const API_URL_FUTURE = "http://api.weatherapi.com/v1/forecast.json";
const API_KEY = import.meta.env.VITE_API_KEY;


export const useWeatherStore = create((set) => ({
  weather: null,
  futureForecast: null,
  isLoadingWeather: false,
  isLoading: false,
  error: null,
  errorWeather: null,

  fetchWeather: async (city) => {
    set({ isLoadingWeather: true, errorWeather: null });

    try {
      const response = await axios.get(API_URL_CURRENT, {
        params: {
          key: API_KEY, 
          q: city,
          lang: "en",
        },
      });

      set({ weather: response.data });
    } catch (error) {
      set({ errorWeather: error.message });
    } finally {
      set({ isLoadingWeather: false });
    }
  },

  fetchFutureForecast: async (city) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(API_URL_FUTURE, {
        params: {
          key: API_KEY, 
          days: 10,
          q: city,
          lang: "en",
        },
      });
      set({ futureForecast: response.data.forecast.forecastday });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));



//miasto, kraj, dzien tygodnia, pogoda, temperatura, opis pogody, odczuwalna temp - glowny
//today highlit - wind status, humidity sunrise, uv index ,visibilty, sunset