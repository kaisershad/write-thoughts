import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>write thoughts</title>
        <meta name="description" content="Build by kaisershad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by writing your&nbsp;
            <code className={styles.code}>thoughts</code>
          </p>
        </div>

        <div className={styles.center}>Mardown Editor - placeholder</div>

        <div className={styles.grid}>
          <a
            href=""
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
          >
            <h2>
              Idea <span>-&gt;</span>
            </h2>
            <p>Find what the idea behing the project is.</p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>An overview about the functionalities of the editor.</p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
          >
            <h2>
              Write <span>-&gt;</span>
            </h2>
            <p>Start to write your thoughts.</p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
          >
            <h2>
              GitHub <span>-&gt;</span>
            </h2>
            <p>Discover the project and learn how to contribute.</p>
          </a>
        </div>
      </main>
    </>
  )
}
