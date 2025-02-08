import React from 'react'
import MainSection from "./MainSection"
import TodayHighlights from "./TodayHighlights"

const Hero = () => {
  return (
    <div className="p-2 md:p-4 lg:p-8 flex flex-col lg:flex-row gap-5">
      <div className="lg:w-2/5">
        <MainSection />
      </div>
      <div className="lg:w-3/5 ">
        <TodayHighlights />
      </div>
    </div>

  )
}

export default Hero