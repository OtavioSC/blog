import Head from "next/head"
import Layout from "../components/layout"
import utilStyles from '../styles/utils.module.css'


export default function About() {
    return(
       <Layout about>
           <Head>Projects</Head>
           <section className={utilStyles.headingMd}>
            <h2> Building this section ...</h2>
           </section>
       </Layout>
    )
}