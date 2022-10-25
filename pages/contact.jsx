import Link from 'next/link'
import Navbar from '../components/navbar'
import Head from 'next/head'
import { HashLoader } from 'react-spinners'

function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Navbar />

            <section className='hero'>
                <div className='container'>
                    <div className='text-wrapper w-full'>
                        <h1 className='title'>Contact</h1>
                        <p className='description'>Please contact me at the following : </p>
                        <ul className='contact-links'>
                            <li className='contact-item'>Email : aderohmatmaulana77@gmail.com</li>
                            <li className='contact-item'>Phone/Whatsapp : +6289612664228</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Contact;