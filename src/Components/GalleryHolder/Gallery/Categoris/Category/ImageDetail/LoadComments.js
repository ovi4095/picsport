import React from 'react'
import './ImageDetail.css'
import Profile from '../../../../../assets/images/proflie pic/profile.png'
const LoadComments = ({comments}) => {
    // console.log('Seleted Image in LoadCommnet',image.id)
    // console.log('Seleted comments in LoadCommnet',comments)

  return (
    <div>
       {
        comments.map((c)=> {
            return  (<div key={c.imageId} className='showComments' style={{display:'flex', marginBottom:'0.5rem'}}>
                        <img style={{width:'80px', height:'80px', marginLeft:'1rem',marginTop:'1rem'}} src={Profile} alt="profile" />
                        <div style={{marginLeft:'1rem', marginTop:'10px'}}>
                            <h5 style={{marginLeft:'0rem', 
                                        marginTop:'0rem', 
                                        paddingTop:'.5rem'}}>{c.author}</h5>
                            <p style={{marginLeft:'0rem'}}>{c.comment}</p>
                        </div>
                    </div>)
        })
       }
    </div>
  )
}

export default LoadComments