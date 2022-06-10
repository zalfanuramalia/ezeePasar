import React from 'react'
import Head from 'next/head'
import ControlledCarousel from '../components/Carousel'
import Layout from '../components/Layout'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import styles from '../styles/home.module.scss'
import {BsWhatsapp, BsInstagram} from 'react-icons/bs'
import {ImFacebook2} from 'react-icons/im'
import CardMenu from '../components/CardMenu'
import populer from '../components/Populer'
import terlaris from '../components/Terlaris'
import terbaru from '../components/Terbaru'
import promo from '../components/Promo'

function home() {
  const product = [
    {name: "Promo", img: '/images/sayur1.png'}, 
    {name: "Produk Sembako", img: '/images/sayur2.png'},
    {name: "Paket Spesial", img: '/images/sayur3.png'}, 
    {name: "Sayur", img: '/images/sayur4.jpg'},
    {name: "Buah", img: '/images/sayur5.jpg'}, 
    {name: "Daging", img: '/images/sayur6.jpg'},
    {name: "Promo", img: '/images/sayur1.png'}, 
    {name: "Produk Sembako", img: '/images/sayur2.png'},
    {name: "Paket Spesial", img: '/images/sayur3.png'}, 
    {name: "Sayur", img: '/images/sayur4.jpg'},
    {name: "Buah", img: '/images/sayur5.jpg'}, 
    {name: "Daging", img: '/images/sayur6.jpg'},
  ]
  return (
    <>
        <Head>
            <title>ezeePasar | ezeePasar | Pasar Modern Digital</title>
            <meta name="description" content="Next Coffee for You" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <div className='mt-5'>
            <ControlledCarousel />
          </div>
          <Container>
            <Card className='rounded rounded-3 bg-white shadow my-5'>
              <Row className='mx-5 my-3'>
                <Col xl={6} sm={12} className="text-justify">
                  <div className={`${styles.aktif}`}>Aktifkan ezeeTunai untuk pembayaran tanpa ribet</div>
                  <div className='mt-3'>
                    <Button className={`${styles.button}`}>Aktivasi</Button>
                  </div>
                </Col>
                <Col className='text-end'>
                  <Image src='/images/ezeetunai.svg' alt='ezeetunai' />
                </Col>
              </Row>
            </Card>
            <div className={!`${styles.scroll}` ? `d-flex align-items-center mt-3` : `${styles.scroll} d-flex align-items-center scroll scroll-smooth mt-3`}>
              {product.map((data, idx) => (
                <div className='my-3 d-flex flex-column align-items-center' key={idx} style={{ cursor: 'pointer' }}>
                  <div className='text-center me-3'><Image src={data.img} className={`${styles.img}`} alt="sayur" width={120} height={120} /></div>
                  <div className='text-center'>{data.name}</div>
                </div>
              ))}          
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center mt-5 mx-3'>
              <div>
                <h2>Promo</h2>
                <div>Promo spesial hanya untuk kamu</div>
              </div>
              <h5 className={`${styles.promo}`} style={{ cursor: 'pointer' }}>
                Lihat Semua
              </h5>
            </div>
            <div className='position-relative'>
              <Image src='/images/bg-promo.png' alt='logo' className={`${styles.home} position-absolute`} />
              <div className={`${styles.scroll} d-flex align-items-center mx-3`}>
                {promo.map((data, idx) => (
                  <div className="mx-3 my-5" key={idx} style={{ cursor: 'pointer' }}>
                    <CardMenu newClass={`${styles.populer}`} cardName={data.name} cardFill={data.fill} cardPrice={data.price} cardImage={data.image} cardDiscount={data.disc} cardCut={data.cut} />
                  </div>
                ))}
              </div>
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center mt-5 mx-3 '>
              <div>
                <h2>Product Terbaru</h2>
                <div>Product berikut sudah tersedia di ezeePasar</div>
              </div>
            </div>
            <Container>
            <div className={`${styles.scroll} d-flex align-items-center mt-5 mx-3`}>
              {terbaru.map((data, idx) => (
                <div className="my-3 mx-3" key={idx} style={{ cursor: 'pointer' }}>
                  <CardMenu newClass={`${styles.populer}`} cardName={data.name} cardFill={data.fill} cardPrice={data.price} cardImage={data.image} cardDiscount={data.disc} cardCut={data.cut} cardJual={data.jual} />
                </div>
              ))}
            </div>
            </Container>
            <div className='d-flex flex-row justify-content-between align-items-center mt-5 mx-3'>
              <div>
                <h2>Product Terlaris</h2>
                <div>Product - product terlaris di ezeePasar</div>
              </div>
              <h5 className={`${styles.promo}`} style={{ cursor: 'pointer' }}>
                Lihat Semua
              </h5>
            </div>
            <Container>
            <div className={`${styles.scroll} mt-5 d-flex align-items-center`}>
              {terlaris.map((data, idx) => (
                <div className="my-3 mx-3" key={idx} style={{ cursor: 'pointer' }}>
                  <CardMenu newClass={`${styles.populer}`} cardName={data.name} cardFill={data.fill} cardPrice={data.price} cardImage={data.image} cardDiscount={data.disc} cardCut={data.cut} cardJual={data.jual} />
                </div>
              ))}
            </div>
            </Container>
            <div className='d-flex flex-row justify-content-between align-items-center mt-5 mx-3'>
              <div>
                <h2>Pencarian Populer</h2>
                <div>Populer berdasarkan pencarian di ezeePasar</div>
              </div>
              <h5 className={`${styles.promo}`} style={{ cursor: 'pointer' }}>
                Lihat Semua
              </h5>
            </div>
            <Container>
            <div className={`${styles.scroll} mt-5 d-flex align-items-center`}>
              {populer.map((data, idx) => (
                <div className="my-3 mx-3" key={idx} style={{ cursor: 'pointer' }}>
                  <CardMenu newClass={`${styles.populer}`} cardName={data.name} cardFill={data.fill} cardPrice={data.price} cardImage={data.image} cardDiscount={data.disc} cardCut={data.cut} cardJual={data.jual} />
                </div>
              ))}
            </div>
            </Container>
          </Container>
          <div className='my-5'>
            <div>
                <Image layout='intrinsic' alt='logo' src='/images/footer.jpg' width="100" height="auto"  className="d-block w-100" />
            </div>
            <h3 className='text-center my-4'>Tentang ezeePasar</h3>
            <p className='text-center'>Platform belanja online berkonsep pasar modern berbasis digital melayani kebutuhan harian seperti sayur, buah segar dan bumbu dapur dengan jaminan kualitas yang baik.</p>
            <div className='text-center'>
              <Button className={`${styles.btn}`}>Pelajari Lebih</Button>
            </div>
            <h3 className='text-center my-4'>Informasi & Pemesanan</h3>
            <div className={`${styles.contact} d-flex justify-content-center align-items-center mb-5`}>
              <BsWhatsapp className='mx-2' />
              +62817844931
            </div>
            <h3 className='text-center my-4'>Informasi Terkini</h3>
            <div className={`${styles.bottoms} d-flex justify-content-around align-items-center mb-5`}>
              <div className='d-flex justify-content-center align-items-center'>
                <BsInstagram className={`${styles.social} mx-3`} />
                <h4>ezeePasar</h4>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <ImFacebook2 className={`${styles.social} mx-3`}  />
                <h4>ezeePasar</h4>
              </div>
            </div>
          </div>
      </Layout>
    </>
  )
}

export default home