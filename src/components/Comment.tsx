import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './comment.module.scss';

interface CommentProps {
  comment: string;
  handleDeleteComment: (comment: string) => void;
}

export function Comment({ comment, handleDeleteComment }: CommentProps) {
  const [numberOfLike, setNumberOfLike] = useState(0);

  function handleLikeIncrement() {
    setNumberOfLike((state) => {
      return state + 1;
    });
  }

  return (
    <article className={styles.container}>
      <Avatar src="http://github.com/ericksax.png" />
      <div className={styles.contentBox}>
        <div className={styles.commentBox}>
          <header>
            <div>
              <strong>Erick Dev</strong>
              <time>Cerca de 1h atrás</time>
            </div>
            <div>
              <button
                type="button"
                onClick={() => handleDeleteComment(comment)}
              >
                <Trash size={24} />
              </button>
            </div>
          </header>
          <p>{comment}</p>
        </div>
        <div>
          <button onClick={handleLikeIncrement} type="button">
            <ThumbsUp size={20} />
            aplaudir <span>{numberOfLike}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
