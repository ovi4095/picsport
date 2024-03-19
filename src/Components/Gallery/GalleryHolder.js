import React from 'react'
import Gallery from './Gallery'

const  GalleryHolder = (props) => {
  console.log(props);
  const gallery = <Gallery category={props.category} key={props.category.id} selectedCategoryHandler={props.selectedCategoryHandler}/>;
    return (
      <div>
        {gallery}
      </div>
    )
}

export default GalleryHolder