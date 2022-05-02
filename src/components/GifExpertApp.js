import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {
  //const init_categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const init_categories = ['One Punch'];
  const [categories, setCategories] = useState(init_categories)

  // const handlerAdd = () => {
  //   setCategories([...categories, 'HunterxHunter'])
  // }

  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={setCategories} />
    <hr />


    {/* <button onClick={handlerAdd}>Agregar</button> */}

    <ol>
      {
        categories.map(category => (
          <GifGrid key={category} category={category} />          
        ))
      }
    </ol>
    </>
  )
}

export default GifExpertApp