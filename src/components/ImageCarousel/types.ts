interface Image {
  src: string;
  alt?: string;
}

export interface ImageCarouselProps {
  images: Image[];
}
