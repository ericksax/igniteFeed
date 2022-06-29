import styles from './header.module.scss';
import logoImage from '../assets/Ignite simbol.svg';

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logoImage} alt="logo do app Ignite Feed" />
      <p>Ignite Feed</p>
    </header>
  );
}
