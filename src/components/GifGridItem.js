import React from 'react'

export const GifGridItem = ({title, url}) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
      <img className='card__image' src={url} alt={title} />
      <p className='card__text'>{title}</p>
    </div>
  )
}
