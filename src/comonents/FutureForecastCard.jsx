import React from 'react';

const FutureForecastCard = ({ dayName,iconPath ,temperature }) => {
  return (
    <div className="bg-secondary p-4 flex flex-col items-center justify-between rounded-xl min-w-[120px] md:min-w-[150px] lg:min-w-[180px]">
      <h1 className="text-lg md:text-xl lg:text-2xl">{dayName}</h1>
      <img src={iconPath} alt="icon" className="size-25" />
      <p className="text-md md:text-xl">{temperature} &#176; C</p>
    </div>
  );
};

export default FutureForecastCard;
