import React, { useState } from 'react'
import Like from '../../../../../assets/images/proflie pic/like.png'
import Unike from '../../../../../assets/images/proflie pic/unlike.png'
import Profile from '../../../../../assets/images/proflie pic/profile.png'

const ImageDetail = ({image, comment}) => {
    const [toggleLike, setToggleLike] = useState(false);
    const toggleLikeHandler = () => {
        setToggleLike(!toggleLike);
    }
    const liked = toggleLike === true ? Like:Unike;
  return (
    <div>
        <div className='row'>
            <img className='col-sm-12 col-md-6' src={image.image} alt="image" />
            <div className='col-sm-12 col-md-6' >
                <div>
                    <div>
                        <img style={{width:'20px'}} src={liked} alt="logo" onClick={toggleLikeHandler}/>
                        <p>50</p>
                    </div>
                    <div>
                        <p>10 comments</p>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img style={{width:'50px'}} src={Profile} alt="profile" />
                        </div>
                        <div>
                            <h5>{comment.map((comment) => {
                                return (comment.imageId===image.id && comment.author);
                            })}</h5>
                            <p>{comment.map((comment) => {
                                return (comment.imageId===image.id && comment.comment);
                            })}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageDetail