import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

function Product() {
    const router = useRouter()
  return (
    <>
        <Head>
            <title>ezeePasar | Pasar Modern Digital</title>
            <meta name="description" content="Next Coffee for You" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='d-flex justify-content-center align-items-center vh-100'>Product {router.query.id}</div>
    </>
  )
}

export default Product