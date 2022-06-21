import React from 'react'
import { Button, Card, Container} from 'react-bootstrap'
import styles from '../styles/footer.module.scss'
import { BsWhatsapp } from 'react-icons/bs'

function Footer() {
  return (
   <Container className={`${styles.navAwal} py-3 shadow-lg`}>
      <Button className={`${styles.info} d-flex justify-content-center align-items-center text-center w-100 py-2`}>
        <div className={`${styles.icon} mx-2`}><BsWhatsapp /></div>
        <div className={`${styles.text}`}>Info & Bantuan Contact Whatsapp</div>
      </Button>
   </Container>
  )
}

export default Footer