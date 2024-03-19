import React, { useState } from 'react'
import './Category.css'
import ImageDetail from './ImageDetail/ImageDetail';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
const Background = ({comments, images, category}) => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [comment] = useState(comments);
    const [toggleModal, setToggleModal] = useState(false);
   
    const onSelectImage = (image) => {
        setSelectedImage(image);
        setToggleModal(!toggleModal);
    }
    const toggleModalHandler = () =>{
        setToggleModal(!toggleModal);
    }
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
                <Modal isOpen={toggleModal}>
                    <ModalBody>
                    {imageDetail}
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={toggleModalHandler}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
            )
}

export default Background