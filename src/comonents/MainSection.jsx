import React from 'react'
import { useWeatherStore } from "../stores/useWeatherStore"
import { MapPin } from "lucide-react"
import { formatDate, getDayOfWeek } from "../utils/DateFormat";
const MainSection = () => {
  const {weather} = useWeatherStore();
  return (
    <div className="bg-primary rounded-xl p-2 md:p-4 lg:p-6 w-2/5">
      <div className="bg-[#363636] rounded-xl p-1 md:p-2 lg:p-4 flex w-fit gap-2">
        <MapPin />
        <p>{weather?.location.name}, {weather?.location.country}</p>
      </div>
      <div className="p-1 md:p-2 lg:p-4"> 
        <h1 className="text-lg md:text-xl lg:text-3xl">
            {weather? getDayOfWeek(weather?.location.localtime) : ""}
        </h1>
        <p>
          {weather ?  formatDate(weather?.location?.localtime) : ""}
        </p>
      </div>
      <img src="/Day/Group 1.svg" alt="ikona"/>
      <div className="flex justify-end items-center">
        <div className="flex flex-col gap-16 justify-between text-end">
          <h1 className="text-lg md:text-xl lg:text-3xl mt-10">
            {weather?.current.temp_c}°C
          </h1>
          <div>
            <p>
              {weather?.current.condition.text}
            </p>
            <p>
              Fells like {weather?.current.feelslike_c}°
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default MainSection