import React, { useState } from 'react'
import Categoy from './Categoris/Categoris'
import './Gallery.css'
import CATEGORIES from '../../data/categoris'
const Gallery = () => {
  const [categories] = useState(CATEGORIES);
  const category = categories.map((category) => {
       return (<Categoy category={category} key={category.id}/>)
  });
  return (

    <div className='container Gallery Gallery-grid grid--x3'>
        {category}
    </div>
  )
}

export default Gallery