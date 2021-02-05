import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Demo | Home</title>
        <meta name='keywords' content='Demo Project' />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odio
          mollitia corrupti delectus eos! At, a consequatur consequuntur,
          facilis eos officia cupiditate tempora quasi hic, saepe consectetur
          quo? Dicta, autem.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint ad
          neque error minus quasi nam obcaecati, eaque natus provident totam
          exercitationem inventore? Pariatur deleniti doloremque, tenetur
          dolorum earum sed.
        </p>

        <Link href='/posts'>
          <a className={styles.btn}>Go to post</a>
        </Link>
      </div>
    </>
  );
}
