import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Otávio Carmo'
export const siteTitle = 'OCarmo Blog'
const src = "https://github.com/otavioSC.png"

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Blog"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              loader={() => src}
              priority
              src={src}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  loader={() => src}
                  priority
                  src={src}
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}