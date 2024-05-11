import React from 'react'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


function SkeletonCom() {
  return (
    <div className="flex items-center flex-wrap justify-start gap-x-7 gap-y-14 py-14">
      <div className="w-[270px] h-[250px]">
          <Skeleton height={230}/>
          <p><Skeleton height={20}/></p>
          <h2><Skeleton height={40}/></h2>
      </div>
      <div className="w-[270px] h-[250px]">
          <Skeleton height={230}/>
          <p><Skeleton height={20}/></p>
          <h2><Skeleton height={40}/></h2>
      </div>
      <div className="w-[270px] h-[250px]">
          <Skeleton height={230}/>
          <p><Skeleton height={20}/></p>
          <h2><Skeleton height={40}/></h2>
      </div>
      <div className="w-[270px] h-[250px]">
          <Skeleton height={230}/>
          <p><Skeleton height={20}/></p>
          <h2><Skeleton height={40}/></h2>
      </div>
    </div>
  )
}

export default SkeletonCom