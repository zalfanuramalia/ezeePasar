import React from 'react'
import { Button, Card, Container} from 'react-bootstrap'
import styles from '../styles/footer.module.scss'
import { BsWhatsapp } from 'react-icons/bs'

function Footer() {
  return (
   <Container className='mb-5'>
      <Container className='text-center '>
        <Button className={`${styles.info} d-flex justify-content-center align-items-center text-center w-100 `}>
          <div className='mx-3'><BsWhatsapp /></div>
          <span>Info & Bantuan Contact Whatsapp</span>
        </Button>
      </Container>
   </Container>
  )
}

export default Footer