import React, { useEffect } from 'react'
import HighlightCard from "./HighlightCard"
import { Wind, Droplets,Eye } from "lucide-react"
import { useWeatherStore } from "../stores/useWeatherStore"
import UVIndexIcon from "./UVIndexIcon"
import AstronomyCard from "./AstronomyCard"
import { useAstronomyStore } from "../stores/useAstronomyStore";
const TodayHighlights = () => {
  const {weather} =useWeatherStore();
  const {astronomy} = useAstronomyStore();
  
  return (
    <div className="bg-primary rounded-xl w-full h-full">
      <h1 className="p-2 md:p-4 lg:p-6 text-2xl font-bold md:text-3xl lg:text-4xl">
        Today&apos;s Highlights
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2 md:p-4 lg:p-6"> 
        <HighlightCard
          icon={<Wind />}
          title={"Wind Status"}
          info={`${weather?.current.wind_kph} km/h`}
        />
        <HighlightCard
          icon={<Droplets />}
          title={"Humidity"}
          info={`${weather?.current.humidity}%`}
        />
        <AstronomyCard
        icon={<img src="/SunRise.svg" />}
        title={"Sunrise"}
        info = {astronomy?.astronomy.astro.sunrise}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2 md:p-4 lg:p-6">
        <HighlightCard
          icon={<UVIndexIcon/>}
          title={"UV Index"}
          info={`${weather?.current.uv} UV`}
        />
        <HighlightCard
          icon={<Eye />}
          title={"Visibility"}
          info={`${weather?.current.vis_km} km`}
        />
        <AstronomyCard
        icon={<img src="/SunSet.svg" />}
        title={"Sunset"}
        info = {astronomy?.astronomy.astro.sunset}
        />
      </div>
    </div>
  )
}

export default TodayHighlights