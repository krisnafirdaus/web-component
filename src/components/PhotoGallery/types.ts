interface Photo {
  src: string;
  alt?: string;
}

export interface PhotoGalleryProps {
  photos: Photo[];
}
