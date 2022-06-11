import React from 'react'
import { Image } from 'react-bootstrap'
import Head from 'next/head'

function TentangKami() {
    return (
        <>
            <Head>
                <title>ezeePasar | Pasar Modern Digital</title>
                <meta name="description" content="Next Coffee for You" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='my-5'>
                <h3 className='text-center my-4'>Tentang ezeePasar</h3>
                <div>
                    <Image layout='intrinsic' alt='logo' src='/images/footer.jpg' width="100" height="auto"  className="d-block w-100" />
                </div>
                <p className='text-center'>Platform belanja online dengan konsep pasar modern berbasis digital yang melayani kebutuhan harian seperti sayur, buah segar dan bumbu dapur dengan jaminan kualitas yang baik untuk kamu yang sibuk di rumah atau kantor karena pekerjaan yang menyita waktu, pesanan yang kamu lakukan akan kami segera kami siapkan dengan baik pada hub kami, dan kami akan segera melalukan pengantaran H+1* langsung ke depan rumahmu.</p>
                <p className='text-center'>Percayakan kebutuhan harianmu dengan kami. ezeePasar akan jadi #temanbelanjabaru mu!</p>
            </div>
        </>
    )
}

export default TentangKami