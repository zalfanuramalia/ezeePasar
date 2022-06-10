import React from 'react'
import { Image, Card, Button } from 'react-bootstrap'
import styles from "../styles/home.module.scss"

export const CardMenu = ({ cardName, newClass, cardFill, cardPrice, cardImage, cardDiscount, cardCut, cardJual }) => {
    return (
        <Card id="img-object-home" className={`${newClass} img-thumbnail py-3 `}>
            <div className='text-center d-flex justify-content-center position-relative'>
                <Image width={150} src={cardImage} alt="home"></Image>
            </div>                      
            <Card.Body className='text-justify'>
                <Card.Title as="h4">{cardName}</Card.Title>
                <Card.Text as='h6' >{cardFill}</Card.Text>
                {cardDiscount ? <Card.Text as='h6' className='d-flex align-items-center'>
                    <div className={`${styles.disc} me-3`}>{cardDiscount}</div>
                    <div><s>{cardCut}</s></div>
                </Card.Text> : " "}                
                <Card.Text as="h4" className='mt-5'>Rp. {cardPrice}</Card.Text>
                {cardJual ? <Card.Text>Terjual : {cardJual}</Card.Text> : " "}                
            </Card.Body>
            <Button className={`${styles.pesan} text-center`}>Pesan</Button>
        </Card>

    )
}
export default CardMenu