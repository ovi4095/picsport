import React from 'react'
import './Category.css'
import Error from '../../../../assets/images/error/error.png'
const Category = ({category, images}) => {
    console.log(images)
  return (category!==null?(

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
  ):(<div style={{height:"80vh", 
                  display:'flex',
                  flexDirection:'column', 
                  justifyContent:'center', 
                  alignItems:'center'}}>
        <h3 
          style={{color:"#806DBF"}}
        >Sorry! Pleace, Go Back to Galley</h3>
        <img 
          style={{
            width:'350px'
          }} src={Error} alt="Error 404" />
        </div>)
  )
}

export default Category