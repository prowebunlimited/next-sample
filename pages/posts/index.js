import styles from '../../styles/Posts.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
};

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <a className={styles.single}>
            <h3>{post.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
