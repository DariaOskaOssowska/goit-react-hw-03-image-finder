import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => (
  <ul className={css.ImageGallery}>
    {images.map(image => (
      <ImageGalleryItem image={image} key={image.id} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
  // onClick: propTypes.func.isRequired,
};