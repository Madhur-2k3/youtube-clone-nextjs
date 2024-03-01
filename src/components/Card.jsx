import React from 'react'
import Image from 'next/image';

export default function Card(curElem) {

    const{title,thumbnails}=curElem.video;

  return (
    <div className='card'>
        <div className="card-image">
            <Image src={thumbnails[0].url} height={200} width={150} style={{width:'auto'}} className=' object-cover w-full'/>
        </div>
        <div className="card-data">
            <h2 className='w-[70%]'>{title}</h2>
        </div>
    </div>
    // <div className=""></div>
  )
}
