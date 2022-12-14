import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Your Name</title>
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a website)
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>

        </ul>
      </section>
    </div>
  )
}
