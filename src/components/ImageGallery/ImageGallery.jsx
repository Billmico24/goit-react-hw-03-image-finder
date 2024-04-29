import PropTypes from 'prop-types';

import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import {Gallery, Wrapper} from './ImageGallery.styled'

export const ImageGallery = ({ galleryItems, openModal }) => {
  return (
      <Wrapper>
        <Gallery >
        {galleryItems.map((pic, index) => (
            
              <ImageGalleryItem
            key={pic.id}
            imgUrl={pic.webformatURL}
            alt={pic.tags}
            index={index}
            openModal={openModal} />
        ))}
            
          </Gallery>
      </Wrapper>
    )

}

ImageGallery.propTypes = {
  galleryItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string
    })
  ),
  openModal: PropTypes.func.isRequired,
};      
  
  
