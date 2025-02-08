import React from 'react'
import { useWeatherStore } from "../stores/useWeatherStore"
import { MapPin } from "lucide-react"
import { formatDate, getDayOfWeek } from "../utils/DateFormat";
import weatherIcons from "../utils/weatherIcons";
import MainSectionSkeleton from "./skeletons/MainSectionSkeleton";

const MainSection = () => {
  const {weather, isLoading} = useWeatherStore();
  const weatherCode = weather?.current?.condition?.code;
  const weatherIcon = weatherIcons.find(icon => icon.code === weatherCode);
  const isDay = weather?.current?.is_day === 1;

  const iconPath = weatherIcon 
    ? `/${isDay ? weatherIcon.dayIcon : weatherIcon.nightIcon}` 
    : "/icons/default.png";

  return isLoading ?  <MainSectionSkeleton /> :
  (
    <div className="bg-primary rounded-xl p-2 md:p-4 lg:p-6 w-full relative">
  <div className="bg-[#363636] rounded-xl p-2 md:p-4 flex w-fit gap-2">
    <MapPin />
    <p>{weather?.location.name}, {weather?.location.country}</p>
  </div>
  <div className="p-1 md:p-2 lg:p-4"> 
    <h1 className="text-lg md:text-xl lg:text-3xl">
      {weather ? getDayOfWeek(weather?.location.localtime) : ""}
    </h1>
    <p>
      {weather ? formatDate(weather?.location?.localtime) : ""}
    </p>
  </div>
  
  <div className="relative h-52 flex justify-center items-center">
    <img 
      src={iconPath} 
      alt="ikona" 
      className="size-40 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    />
  </div>

  <div className="flex flex-col gap-5 items-end text-end mt-10">
    <h1 className="text-lg md:text-xl lg:text-3xl">
      {weather?.current.temp_c}°C
    </h1>
    <div className="flex flex-col text-start">
      <p className="font-semibold text-lg">
        {weather?.current.condition.text}
      </p>
      <p className="text-sm">
        Feels like {weather?.current.feelslike_c}°
      </p>
    </div>
  </div>
</div>

  )
}

export default MainSection