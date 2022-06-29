import { ChangeEvent, FormEvent, useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './post.module.scss';

interface ContentProps {
  type: string;
  hash?: string;
  url?: string;
  text?: string;
}

interface PostsProps {
  author: {
    name: string;
    avatarURL: string;
    role: string;
  };

  content: ContentProps[];
}

export function Post({ author, content }: PostsProps) {
  const [comments, setComments] = useState<string[]>([]);

  const [comment, setNewComment] = useState('');

  function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    const newcomment = event.target.value;
    setNewComment(newcomment);
  }

  function handleCustomInvalidMessege(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target?.setCustomValidity('Esse campo e obrigatório!!');
  }

  function handleSubmitComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setComments([...comments, comment]);
    setNewComment('');
  }

  function handleDeleteComment(commentWillBeDeleted: string) {
    const newComments = comments.filter(
      (comment) => comment !== commentWillBeDeleted
    );
    setComments(newComments);
  }

  const isNewCommemtEmpty = comment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.authorInfo}>
          <Avatar src={author.avatarURL} />
          <div className={styles.author}>
            <strong>{author.name}</strong>
            <aside>{author.role}</aside>
          </div>
        </div>
        <time title="data do post" dateTime="11 de maio de 2022">
          Publicado à 1h
        </time>
      </header>
      <div className={styles.content}>
        {content.map((content) => {
          if (content.type === 'paragraph') {
            return <p key={content.text}>{content.text}</p>;
          } else if (content.type === 'link') {
            return (
              <div key={content.text}>
                <p key={content.text}>
                  <a href="#">{content.url}</a>
                </p>
                <p key={content.text}>
                  <a href="#">{content.hash}</a>
                </p>
              </div>
            );
          }
        })}
      </div>
      <form
        onSubmit={(event) => handleSubmitComment(event)}
        className={styles.contentForm}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          name="coment"
          value={comment}
          onInvalid={handleCustomInvalidMessege}
          required
          onChange={(event) => handleNewComment(event)}
        ></textarea>
        <footer>
          <button type="submit" disabled={isNewCommemtEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      {comments.map((comment) => (
        <Comment
          key={comment}
          comment={comment}
          handleDeleteComment={handleDeleteComment}
        />
      ))}
    </article>
  );
}
