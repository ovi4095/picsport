import React from 'react'
import { Link } from 'react-router-dom'
import './Categoris.css'

import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'
const Categoris = ({category}) => {
    const link = (category.categoryName);
    return (
    <div className='catagoryDiv'>
        <Link to={'/category-'+link}  style={{textDecoration: 'none',display:'inline-block', margin:'0px'}}>
        <div className='CategotyCard'>
            <Card inverse
                style={{
                    width: '100%'
                }}
            >
                <CardImg
                alt="Card image cap"
                src={category.image}
                style={{
                    height: 'auto'
                }}
                width="100%"
                />
                <CardImgOverlay>
                <CardTitle
                style={{
                    background:'rgba(0, 0, 0, 0.435)',
                    
                    paddingLeft: '1rem',
                    fontSize:'1.2rem',
                    textAlign:'left',
                    marginTop: '3.5rem',
                    color:"#ffffff",
                    width: '100%',
                    borderRadius: '12.5px'
                }} 
                >
                    <h2 className='h2C'>{category.categoryName}</h2>
                </CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
        </Link>
    </div>
  )
}

export default Categoris