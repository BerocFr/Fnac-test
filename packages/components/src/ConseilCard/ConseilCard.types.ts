export interface ConseilCardProps {
  type?: 'img' | 'text';
  title: string;
  author: string;
  authorRole?: string;
  imageSrc?: string;
  avatarSrc?: string;
  href?: string;
  className?: string;
}
