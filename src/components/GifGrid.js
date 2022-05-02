//import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem'

import { useFechGifs } from "../hooks/useFechGifs"

export const GifGrid = ({category}) => {  
  const {data:images, loading} = useFechGifs(category)

  return (
    <>      
      <h3 className="animate__animated animate__fadeIn">{category}</h3>       
      {loading && <p className='animate__animated animate__flash'>Loading...</p>}
      <div className="card__grid">
        {/*Es lo mismo que se pasa abajo<GifGridItem key={img.id} url={img.url} title={img.title}  />         */}
       {images.map(img => (
          <GifGridItem key={img.id} {...img} />   
        )    
      )}
      </div> 
    </>
  )
}
