import React from 'react';
import './styles.css'; // Asumsikan Anda telah membuat file styles.css
import { PhotoGalleryProps } from './types'; // Impor interface yang telah kita definisikan

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => (
        <img key={index} src={photo.src} alt={photo.alt || 'Photo'} className="photo"/>
      ))}
    </div>
  );
};

export default PhotoGallery;
