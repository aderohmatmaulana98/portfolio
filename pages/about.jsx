import Link from 'next/link'
import Navbar from '../components/navbar'
import Head from 'next/head'
import { HashLoader } from 'react-spinners'

function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>

            <Navbar />
            <section className='hero'>
                <div className='container'>
                    <div className='text-wrapper w-full'>
                        <h1 className='title'>About</h1>
                        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis officia nemo dicta fuga necessitatibus provident autem. Laudantium et, in molestias rerum aliquam veritatis, sapiente voluptate commodi minima facilis id exercitationem.</p>
                    </div>
                </div>
            </section>
        </>
    )

}
export default About;