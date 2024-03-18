import React from 'react'
import './Category.css'
const Category = ({category, images}) => {
    console.log(images)
  return (
    <div>
        <h2 className='CategoryTitle'>{category.categoryName}</h2>
        <div className=' Category--grid grid--x3'>
            {
               images.map((images)=>{
                  return <img className='CategoryImgs' src={images.image} alt="Gallery Image" />;
               })
            }
        </div>
    </div>
  )
}

export default Category