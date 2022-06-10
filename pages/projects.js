import Link from "next/link"
import Head from "next/head"

import Layout from "../components/layout"
import utilStyles from '../styles/utils.module.css'

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/otaviosc/repos')
    const data = await res.json()
  
    return { props: { data } }
}

export default function About({data}) {
    
    return(
       <Layout about>
           <Head>Projects</Head>
           <section className={utilStyles.headingMd}>
           <ul className={utilStyles.list}>
            {data.filter(({fork}) => !fork)
                 .map(({ name, language, html_url, description }) => (
                <li className={utilStyles.listWithBorder} key={name}>
                  <Link href={html_url}>
                    <a>💻️ {name}</a>
                  </Link>
                  <br/>
                  <p className={utilStyles.padding0px}>
                      {description}
                 </p>
                </li>
          ))}
        </ul>
           </section>
       </Layout>
    )
}