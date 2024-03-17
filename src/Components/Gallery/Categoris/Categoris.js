import React from 'react'
import { Link } from 'react-router-dom'
import './Categoris.css'

import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'
const Categoy = ({category}) => {
  return (
    <div>
        <Link  style={{textDecoration: 'none'}}>
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
                    fontSize:'2.5rem',
                    textAlign:'left',
                    marginTop: '5rem',
                    color:"#ffffff",
                    width: '100%',
                    borderRadius: '12.5px'
                }} 
                >
                    {category.categoryName}
                </CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
        </Link>
    </div>
  )
}

export default Categoy