import React from 'react';

const MainSectionSkeleton = () => {
  return (
    <div className="bg-primary rounded-xl p-2 md:p-4 lg:p-6 h-[614px] w-2/5 animate-pulse">
      {/* Lokalizacja */}
      <div className="bg-[#363636] rounded-xl p-1 md:p-2 lg:p-4 flex w-fit gap-2">
        <div className="bg-navtext h-6 w-6 rounded-full"></div>
        <div className="bg-navtext h-6 w-32 rounded"></div>
      </div>

      {/* Data */}
      <div className="p-1 md:p-2 lg:p-4"> 
        <div className="bg-navtext h-6 w-24 rounded mb-2"></div>
        <div className="bg-navtext h-4 w-32 rounded"></div>
      </div>
      
      {/* Ikona i temperatura */}
      <div className="flex justify-end gap-20 items-center">
        <div className="bg-navtext size-40 rounded-xl"></div>
        <div className="flex flex-col gap-5 justify-between text-end">
          <div className="bg-navtext h-8 w-20 rounded"></div>
          <div className="flex flex-col text-start gap-2">
            <div className="bg-navtext h-6 w-32 rounded"></div>
            <div className="bg-navtext h-4 w-24 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSectionSkeleton;
