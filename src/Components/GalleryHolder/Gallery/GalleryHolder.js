import React from 'react'
import Gallery from './Gallery'
import './Gallery.css'


const  GalleryHolder = (props) => {
  console.log(props);
  const gallery = <Gallery category={props.category} key={props.category.id} selectedCategoryHandler={props.selectedCategoryHandler}/>;
    return (
      <div className='GalleryHolder'>
        <h1>Category of Images</h1>
        {gallery}
      </div>
    )
}

export default GalleryHolder