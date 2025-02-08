import { LoaderCircle, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useWeatherStore } from "../stores/useWeatherStore";
import { useAstronomyStore } from "../stores/useAstronomyStore";
import { useSugestionStore } from "../stores/useSugestionStore";
import { useDebounce } from "use-debounce";

export default function SearchInput() {
  const [city, setCity] = useState("");
  const [debouncedCity] = useDebounce(city, 300);
  const { fetchWeather,fetchFutureForecast, futureForecast ,isLoading } = useWeatherStore();
  const { fetchAstronomy } = useAstronomyStore();
  const { suggestions, fetchSugesstions, setSuggestions } = useSugestionStore();

  useEffect(() => {
    fetchWeather("London");
    fetchAstronomy("London");
    fetchFutureForecast("London");
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (debouncedCity.length >= 2) {
      fetchSugesstions(debouncedCity);
    } else {
      setSuggestions([]);
    }
  }, [debouncedCity]);

  const searchForecast = (location) => {
    fetchWeather(location);
    fetchAstronomy(location);
    fetchFutureForecast(location);
    setSuggestions([]);
  };

  const handleSuggestionClick = (name, country) => {
    const newCity = `${name}, ${country}`;
    setCity(newCity);
    setSuggestions([]);
    searchForecast(newCity); 
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchForecast(city); 
    }
  };

  return (
    <div className="relative w-full max-w-xs text-navtext">
      {isLoading ? (
        <LoaderCircle className="absolute left-3 top-1/2 -mt-2.5 animate-spin" size={20} />
      ) : (
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
          size={20}
          onClick={() => searchForecast(city)}
        />
      )}
      <input
        type="text"
        placeholder="Search your location"
        className={`w-full p-2 pl-10 bg-primary text-white focus:outline-none ${suggestions.length > 0 ? "rounded-t-full" : "rounded-full"}`}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => setTimeout(() => setSuggestions([]), 200)}
      />

      {suggestions.length > 0 && (
        <ul className="absolute w-full z-10 bg-primary text-white rounded-b-lg shadow-lg max-h-40 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion.name, suggestion.country)}
            >
              {suggestion.name}, {suggestion.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
