import styles from './avatar.module.scss';

interface SrcProps {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder }: SrcProps) {
  return (
    <img
      className={hasBorder ? styles.avatar : styles.noBorder}
      src={src}
      alt="avatar"
    />
  );
}

Avatar.defaultProps = {
  hasBorder: false,
};
