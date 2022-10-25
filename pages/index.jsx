import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar'
import { HashLoader } from 'react-spinners'

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <section className='hero'>
        <div className='container'>
          <div className='text-wrapper'>
            <h1 className='title'>Halo, I'am Ade Rohmat Maulana</h1>
            <p className='description'>I am 24 years old. I am a web developer, I graduated from the Yogyakarta University of Technology majoring in Informatics with a GPA of 3.66. I master several programming languages. Previously I have worked on several application projects.</p>

            <Link href="/contact"><a className='cta'>Contact Me</a></Link>
          </div>
          <div className='image-wrapper'>
            <img src="/portofolio.svg" className='hero-image' alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
