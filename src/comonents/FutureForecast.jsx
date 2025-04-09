import React from 'react';
import { useWeatherStore } from '../stores/useWeatherStore';
import FutureForecastCard from './FutureForecastCard';
import { getShortDayName } from '../utils/DateFormat';
import weatherIcons from "../utils/weatherIcons";

const FutureForecast = () => {
  const { futureForecast } = useWeatherStore();

  return (
    <div className="p-2 md:p-4 lg:p-8 mt-2 md:mt-5 rounded-xl bg-primary">
      <div className="flex flex-col">
        <h1 className="text-white text-2xl font-bold">3 Day Forecast</h1>
          <h3 className="text-sm text-gray-300">
            It used to show 10 days (thanks to the premium trial), but it's expired now
          </h3>
        </div>
      {/* Kontener przewijany w poziomie */}
      <div className="overflow-x-auto mt-2 md:mt-5 w-full pb-4
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:border-2
      [&::-webkit-scrollbar-track]:border-white
      [&::-webkit-scrollbar-track]:bg-primary
        [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-[#363636]
    ">

        <div className="flex justify-center space-x-4 min-w-max">
          {futureForecast?.map((forecast, index) => {
            const weatherCode = forecast?.day?.condition?.code;
            const weatherIcon = weatherIcons.find((icon) => icon.code === weatherCode);
            const iconPath = weatherIcon ? weatherIcon.dayIcon : "/icons/default.png";

            return (
              <FutureForecastCard
                key={index}
                dayName={getShortDayName(forecast.date)}
                iconPath={iconPath}
                temperature={forecast.day.avgtemp_c}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FutureForecast;
