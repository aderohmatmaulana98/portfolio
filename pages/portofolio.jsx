import Link from 'next/link'
import Navbar from '../components/navbar'
import Head from 'next/head'
import Image from 'next/image'
import { HashLoader } from 'react-spinners'

function Portofolio() {
    return (
        <>
            <Head>
                <title>Portofolio</title>
            </Head>
            <Navbar />

            <section className='hero'>
                <div className='container'>
                    <div className='text-wrapper w-full'>
                        <h1 className='title'>Portofolio</h1>
                        <p className='description'>This is my portfolio .</p>
                        <div className='portofolio-wrapper'>
                            <div className='portofolio-item'>
                                <img src="/Pusdiklat.PNG" alt="portofolio-image" className='portofolio-image' />
                                <h4 className='portofolio-name'><Link href='https://github.com/aderohmatmaulana98/pendaftaran-ujian-ept'><a target="_blank" className='git-links'>Sistem Pendaftaran Ujian EPT</a></Link></h4>
                                <div className='portofolio-category'>Website Dev</div>
                            </div>
                            <div className='portofolio-item'>
                                <img src="/sobatutbk.PNG" alt="portofolio-image" className='portofolio-image' />
                                <h4 className='portofolio-name'><Link href="https://github.com/aderohmatmaulana98/sobatutbk"><a target="_blank" className='git-links'>Sistem Try Out Online</a></Link></h4>
                                <div className='portofolio-category'>Website Dev</div>
                            </div>
                        </div>
                        <div className='portofolio-wrapper'>
                            <div className='portofolio-item'>
                                <img src="/selomerto.PNG" alt="portofolio-image" className='portofolio-image' />
                                <h4 className='portofolio-name'><Link href="https://github.com/aderohmatmaulana98/sistem_pembayaran_spp"><a target="_blank" className='git-links'>Sistem Pembayaran SPP dan Buku</a></Link></h4>
                                <div className='portofolio-category'>Website Dev</div>
                            </div>
                            <div className='portofolio-item'>
                                <img src="/pmbakn.PNG" alt="portofolio-image" className='portofolio-image' />
                                <h4 className='portofolio-name'><Link href="https://github.com/aderohmatmaulana98/pmb_akn"><a target="_blank" className='git-links'>Penerimaan Mahasiswa Baru</a></Link></h4>
                                <div className='portofolio-category'>Website Dev</div>
                            </div>
                        </div>
                        <div className='portofolio-wrapper'>
                            <div className='portofolio-item'>
                                <img src="/ikan.PNG" alt="portofolio-image" className='portofolio-image' />
                                <h4 className='portofolio-name'><Link href="https://github.com/aderohmatmaulana98/sistem-identifikasi-kesegaran-ikan"><a target="_blank" className='git-links'>Sistem Identifikasi Kesegaran Ikan</a></Link></h4>
                                <div className='portofolio-category'>Machine Learning</div>
                            </div>
                            <div className='portofolio-item'>
                                <img src="/kayu.PNG" alt="portofolio-image" className='portofolio-image' />
                                <h4 className='portofolio-name'><Link href="https://github.com/aderohmatmaulana98/sistem_identifikasi_jenis_kayu"><a target="_blank" className='git-links'>Sistem Identifikasi Jenis Kayu</a></Link></h4>
                                <div className='portofolio-category'>Machine Learning</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Portofolio;