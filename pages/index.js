import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, i'm Otavio. This is just a Brazilian Software Developer normal blog. Have fun!</p>
      </section>
      <section className={`${utilStyles.headingMd}`}>
          <Link href="/about">
              <h2> About me →</h2>
          </Link>
      </section>
      <section className={`${utilStyles.headingMd}`}>
          <Link href="/projects">
              <h2> Projects →</h2>
          </Link>
      </section>
      <section className={`${utilStyles.headingMd}`}>
        <h2> What am I currently learning?</h2>
        <ul className={utilStyles.list}>
          <li>
            <a>🗄️ GraphQL</a>
          </li>
          <li>
            <a>🦀 Rust</a>
          </li>
          <li>
            <a>🌐 Neural network and Deep Learning</a>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd}`}>
        <h2>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
             <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}