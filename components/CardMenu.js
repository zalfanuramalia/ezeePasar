import React from 'react'
import { Image, Card, Button } from 'react-bootstrap'
import styles from "../styles/home.module.scss"

export const CardMenu = ({ cardName, newClass, cardFill, cardPrice, cardImage }) => {
    return (
        <Card id="img-object-home" className={`${newClass} img-thumbnail py-3 `}>
            <div className='text-center d-flex justify-content-center position-relative'>
                <Image width={150} src={cardImage} alt="home"></Image>
            </div>                      
            <Card.Body className='text-justify'>
                <Card.Title as="h4">{cardName}</Card.Title>
                <Card.Text as='h6' >{cardFill}</Card.Text>
                <Card.Title as="h4" className='mt-5'>Rp. {cardPrice}</Card.Title>                
            </Card.Body>
            <Button className={`${styles.pesan} text-center`}>Pesan</Button>
        </Card>

    )
}
export default CardMenu