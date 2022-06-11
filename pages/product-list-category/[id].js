import { useRouter } from 'next/router'
import React from 'react'
import Head from 'next/head'

function ProductList() {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Bahan Makanan | ezeePasar | Pasar Modern Digital</title>
                <meta name="description" content="Next Coffee for You" />
                <link rel="icon" href="/favicon.ico" />
            </Head>        
            <div className='d-flex justify-content-center align-items-center vh-100'>Product List {router.query.id}</div>
        </>
    )
}

export default ProductList