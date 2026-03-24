export interface GalleryImage {
  src?: string;
  alt?: string;
  type?: 'img' | 'video';
}
export interface GalleryProps {
  images: GalleryImage[];
  device?: 'desktop' | 'mobile';
  className?: string;
}
