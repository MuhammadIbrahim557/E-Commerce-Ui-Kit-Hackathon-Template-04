import Image from 'next/image'
import React from 'react'

const Names = () => {
  return (
    <div>
   <div className=" flex justify-center my-20">
        <Image
          src="/names.png"
          alt="Pink Dot"
          width={904}
          height={93}
        />
      </div>
    </div>
  )
}

export default Names