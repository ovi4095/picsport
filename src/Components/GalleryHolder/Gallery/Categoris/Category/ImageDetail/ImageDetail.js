import React, { useState } from 'react'
import './ImageDetail.css'
import Like from '../../../../../assets/images/proflie pic/like.png'
import Unike from '../../../../../assets/images/proflie pic/unlike.png'
import Send from '../../../../../assets/comment/sendBtn.png'
import Sent from '../../../../../assets/comment/sentbtn.png'
import LoadComments from './LoadComments'

const ImageDetail = ({image, comment}) => {
    // console.log('ImageLoader', image)
    // console.log("Background Comment check ID", comment)
    const [toggleLike, setToggleLike] = useState(false);
    const [toggleHover, setToggleHover] = useState(false);
    const toggleLikeHandler = () => {
        setToggleLike(!toggleLike);
    }
    const toggleHoverHandler = () =>{
        setToggleHover(!toggleHover);
    }
    const sendBtn = toggleHover === false? Send:Sent;
    const liked = toggleLike === true ? Like:Unike;
    const seletedComment = comment.filter((comment)=> comment.imageId === image.id);
    // console.log("Background image.id check ID", seletedComment.imageId)
    console.log("Background Comment check ID", seletedComment)
    return (
    <div>
        <div className='ImageDetailModal'>
            <img className='MainImage' src={image.image} alt="image" />
            <div className='TextView' >
                <div className='LikeComment'>
                    <div className='Like'>
                        <img style={{width:'2rem', height:"2rem"}} src={liked} alt="logo" onClick={toggleLikeHandler}/>
                    </div>
                    <div>
                        <p style={{fontSize:'20px', marginLeft:'5px'}}>1 comments</p>
                    </div>
                </div>
                <hr />
                <div>
                    <div className=''>
                        {/* <div>
                            <img style={{width:'50px', marginLeft:'1rem',marginTop:'1rem'}} src={Profile} alt="profile" />
                        </div>
                        <div>
                            <h5 style={{marginLeft:'.5rem',marginTop:'0.5rem', paddingTop:'.5rem'}}>{comment.map((comment) => {
                                return (comment.imageId===image.id && comment.author);
                            })}</h5>
                            <p style={{marginLeft:'.5rem'}}>{comment.map((comment) => {
                                return (comment.imageId===image.id && comment.comment);
                            })}</p>
                        </div> */}
                        <LoadComments comments={seletedComment}/>
                    </div>
                        <hr />
                        <div>
                            <div className='commnetBox'>
                                <input type="textarea" className='form-control' placeholder='Comment Here' aria-label='Comment Here'/>
                                <img 
                                    style={{width:'30px', marginLeft:'1rem'}}
                                    src={sendBtn} 
                                    alt="sendBtn"
                                    onMouseEnter={toggleHoverHandler}
                                    onMouseLeave={toggleHoverHandler}/>
                            </div>
                        </div>
                        <hr />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageDetail