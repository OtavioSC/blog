import Head from "next/head"
import Layout from "../components/layout"
import utilStyles from '../styles/utils.module.css'


export default function About() {
    return(
       <Layout about>
           <Head>About me</Head>
           <section className={utilStyles.headingMd}>
             <p>
            Since I was 7, I am very excited about everything the digital ecosystem encompasses, as that was when I had the privilege of 
            getting my first computer. 
            <p>I fell in love right away with this world of infinite possibilities, which allowed me to evolve a 
            lot as a person and developer. In 2021, I started at my dream university and every day I’m always learning something motivating and inspiring, that will make me change the world. My biggest professional and personal objective is to bring technology to 
            disadvantaged groups of society, enable people of all ages to have access and the possibility to change their lives.</p>
            </p>
            <p>Knowleadge is a right, and I know that I must disseminate what I learn and consume. </p>
           </section>
       </Layout>
    )
}