import styles from './sidebar.module.scss';
import backImage from '../assets/backImg.jpg';
import { PencilSimpleLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <section className={styles.container}>
      <header>
        <img src={backImage} />
      </header>

      <div className={styles.profile}>
        <Avatar hasBorder src="http://www.github.com/ericksax.png" />

        <strong>Erick Freitas</strong>
        <aside>Front End Developer</aside>
      </div>

      <footer className={styles.footer}>
        <button>
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </button>
      </footer>
    </section>
  );
}
