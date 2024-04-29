import PropTypes from 'prop-types';


import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled'


export const ImageGalleryItem = ({imgUrl, alt, openModal, index} ) => {


    return (
        <GalleryItem >
             <GalleryImg src={imgUrl} alt={alt} onClick={() => openModal(index)}/>
        </GalleryItem>
    )
}

ImageGalleryItem.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    alt: PropTypes.string,
    index: PropTypes.number.isRequired,
    openModal: PropTypes.func.isRequired
};      
  