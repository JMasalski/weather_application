import React from 'react'

const HighlightCard = ({icon, title, info,}) => {
  return (
    <div className="bg-secondary rounded-xl p-2 md:p-4 flex flex-col gap-10 items-end">
    <p className="flex items-center mx-auto gap-2 justify-center text-center text-md md:text-lg lg:text-2xl">
      {icon} {title}
    </p>
    <h1 className="text-lg md:text-xl lg:text-3xl font-bold">{info}</h1>
    {/* <p className="text-sm md:text-lg lg:text-xl">WSW</p> */}
  </div>
  

  )
}

export default HighlightCard