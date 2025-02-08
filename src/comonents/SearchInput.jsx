import { LoaderCircle, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useWeatherStore } from "../stores/useWeatherStore";
import { useAstronomyStore } from "../stores/useAstronomyStore";
import { useSugestionStore } from "../stores/useSugestionStore";
import { useDebounce } from "use-debounce";

export default function SearchInput() {
  const [city, setCity] = useState("");
  const [debouncedCity] = useDebounce(city, 500);
  const { fetchWeather, isLoading } = useWeatherStore();
  const { fetchAstronomy } = useAstronomyStore();
  const { suggestions, fetchSugesstions, setSuggestions } = useSugestionStore();

  useEffect(() => {
    fetchWeather("London");
    fetchAstronomy("London");
  }, []);

  useEffect(() => {
    if (debouncedCity.length >= 3) {
      fetchSugesstions(debouncedCity);
    } else {
      setSuggestions([]); // Czyszczenie podpowiedzi, jeśli użytkownik skasuje wpis
    }
  }, [debouncedCity]);

  const searchForecast = () => {
    fetchWeather(city);
    setSuggestions([]); // Zamknij podpowiedzi
  };

  const handleSuggestionClick = (name, country) => {
    setCity(`${name}, ${country}`);
    setSuggestions([]); // Ukrycie listy po wyborze miasta
  };

  return (
    <div className="relative w-full max-w-xs text-navtext">
      {isLoading ? (
        <LoaderCircle className="absolute left-3 top-1/2 -mt-2.5 animate-spin" size={20} />
      ) : (
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
          size={20}
          onClick={searchForecast}
        />
      )}
      <input
        type="text"
        placeholder="Search your location"
        className={`w-full p-2 pl-10 bg-primary text-white  focus:outline-none ${suggestions.length > 0 ? "rounded-t-full" : "rounded-full"}`}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onBlur={() => setTimeout(() => setSuggestions([]), 200)} // Zamknij listę po kliknięciu poza input
      />

      {/* 🔹 Lista podpowiedzi */}
      {suggestions.length > 0 && (
        <ul className="absolute w-full z-10 bg-primary text-white rounded-b-lg shadow-lg max-h-40 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onMouseDown={() => handleSuggestionClick(suggestion.name, suggestion.country)}
            >
              {suggestion.name}, {suggestion.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
