import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useWeatherStore } from "../stores/useWeatherStore";

export default function SearchInput() {
  const [city, setCity] = useState("");
  const { fetchWeather, weather } = useWeatherStore();

  const searchForecast = () => {
    fetchWeather(city);
  };
  useEffect(() => {
    fetchWeather("London");
  }, [])
  
  //TODO USUNAC
  useEffect(() => {
    console.log("Aktualne dane pogodowe:", weather);
  }, [weather]);

  return (
    <div className="relative w-full max-w-xs text-navtext">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
        size={20}
        onClick={searchForecast}
      />
      <input
        type="text"
        placeholder="Search your location"
        className="w-full p-2 pl-10 bg-primary text-white rounded-full focus:outline-none"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
}
