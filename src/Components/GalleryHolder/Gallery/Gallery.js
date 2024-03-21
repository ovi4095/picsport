import React from 'react'
import './Gallery.css'
import Categoris from './Categoris/Categoris'


const Gallery = (props) => {
  const category = <Categoris category={props.category} key={props.category.id} selectedCategoryHandler={props.selectedCategoryHandler}/>;
  return(
      // <div className='Gallery  col-sm-12 col-md-6 col-lg-4 col-xl-4'>
      <div className='GalleryCard'>
           {category}
      </div>
  )
}
export default Gallery






















