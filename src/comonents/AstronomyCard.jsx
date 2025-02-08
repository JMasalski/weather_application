import React from 'react'

const AstronomyCard = ({icon, title, info}) => {
  return (
    <div className="bg-secondary rounded-xl col-span-2 p-3 md:p-6 flex flex-col gap-10 justify-center">
      <div className="flex gap-2 justify-between items-center">
        <div>
          {icon}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">{title}</h1>
          <p>{info}</p>
        </div>
      </div>
  </div>
  )
}

export default AstronomyCard