import React, { useState } from 'react'
import './Category.css'
import ImageDetail from './ImageDetail/ImageDetail';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import CrossBlack from '../../../../assets/comment/crossBlack.png'
import CrossRed from '../../../../assets/comment/crossRed.png'

const Landscape = ({comments, images, category}) => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [comment] = useState(comments);
    const [toggleModal, setToggleModal] = useState(false);
    const [toggleHover, setToggleHover] = useState(false);
   
    const onSelectImage = (image) => {
        setSelectedImage(image);
        setToggleModal(!toggleModal);
    }
    const toggleModalHandler = () =>{
        setToggleModal(!toggleModal);
    }
    const toggleHoverHandler = () =>{
        setToggleHover(!toggleHover);
    }

    const close = toggleHover === false? CrossBlack:CrossRed;

    const imageDetail = selectedImage ? <ImageDetail image={selectedImage} comment={comment}/> : null;
    return (
            <div>
                <h2 className='CategoryTitle'>{category.categoryName}</h2>
                <div className=' Category--grid grid--x3'>
                    {
                    images.map((images)=>{
                        return <img className='CategoryImgs' src={images.image} alt="Gallery Image" onClick={()=>onSelectImage(images)}/>;
                    })
                    }
                </div>
                <Modal isOpen={toggleModal} fullscreen>
                    <ModalHeader style={{display:'flex', justifyContent:'end', height:'50px'}}>
                        <img 
                            style={{width:"15px", transition:'all 0.2s'}}  
                            src={close} alt="X"
                            onMouseEnter={toggleHoverHandler}
                            onMouseLeave={toggleHoverHandler}  
                            onClick={toggleModalHandler} />    
                    </ModalHeader>
                    <ModalBody>
                    {imageDetail}
                    </ModalBody>
                    <ModalFooter style={{height:'50px'}}>
                    </ModalFooter>
                </Modal>
            </div>
            )
}

export default Landscape