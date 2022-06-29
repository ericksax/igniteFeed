import { Sidebar } from './Sidebar';
import { Post } from './Post';

import styles from './main.module.scss';

const posts = [
  {
    id: 1,
    author: {
      name: 'Erick',
      role: 'Web Developer',
      avatarURL: 'https://www.github.com/ericksax.png',
    },
    content: [
      { type: 'paragraqph', text: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', url: 'jane.design/doctorcare' },
      { type: 'link', hash: '#novoprojeto #nlw #rocketseat' },
    ],

    // publishedAt: new Date("2022-05-11 08:13:30")
  },
  {
    id: 2,
    author: {
      name: 'Erick',
      role: 'Web Developer',
      avatarURL: 'https://www.github.com/ericksax.png',
    },

    content: [
      { type: 'paragraqph', text: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        text: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', url: '👉 jane.design/doctorcare' },
      { type: 'link', hash: '#novoprojeto #nlw #rocketseat' },
    ],

    // publishedAt: new Date("2022-05-11 08:13:30")
  },
];

export function Main() {
  return (
    <main className={styles.container}>
      <Sidebar />
      <section>
        {posts.map((post) => (
          <Post key={post.id} author={post.author} content={post.content} />
        ))}
      </section>
    </main>
  );
}
