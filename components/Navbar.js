import { Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {BsBellFill} from 'react-icons/bs'
import {RiShoppingBag3Fill} from 'react-icons/ri'
import Link from 'next/link';
import {FiMenu} from 'react-icons/fi'
import styles from '../styles/navbar.module.scss'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const delayExecution = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("ok"), time);
    });
  };

function NavbarHome() {
    const router = useRouter()
    const [index, setIndex] = useState("Bawang Goreng")
    const placeholderText = ["Mayonaise Original Kwepie", "Angco Tanpa Biji", "Tauco Manis Kokita"];

    const changePlaceholder = async () => {
        for (let i = 0; i < placeholderText.length; i++) {
          await delayExecution(2000);
          setIndex(placeholderText[i]);
        }
      };
    
      useEffect(() => {
        changePlaceholder();
      }, []);

    const goSearch = () => {
        router.push('/search')
    }
  return (
        <Navbar expand="lg" className={`${styles.navAwal} py-3 shadow-lg`}>
            <div >
                <Link href='/home'>
                    <a>
                        <Image layout='intrinsic' alt='logo' src='/images/logo.png' width={90} height={50} />
                    </a>
                </Link>
            </div>
            <div>
                <Form onClick={goSearch} className='mx-5 px-5'>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Col sm="10">
                            <Form.Control type="text" placeholder={index} className={`${styles.bg} mx-5`} />
                        </Col>
                    </Form.Group>
                </Form>
            </div>
            <Nav className='text-end'>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                    <li className="nav-item">
                        <Link href='/favorite'>
                            <button className="btn position-relative ms-lg-1">
                                <BsBellFill className={`${styles.icon} fs-2`}/>
                                <div className={`bg-white position-absolute text-white rounded-circle`}>0</div>
                            </button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/home'>
                            <button className="btn position-relative ms-lg-1">
                                <RiShoppingBag3Fill className={`${styles.icon} fs-2`}/>
                                <div className={`bg-white position-absolute text-white rounded-circle`}>0</div>
                            </button>
                        </Link>
                    </li>
                    <li className="nav-item dropdown ms-2">
                        <Link href='/home'>
                            <a className="nav-link fw-bold fs-5" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FiMenu className={`${styles.icon} fs-2`}/>
                                <div className='`bg-white position-absolute text-white rounded-circle'>0</div>
                            </a>
                        </Link>
                        <ul className='dropdown-menu bg-white ' aria-labelledby="navbarDropdown">
                            <li className='my-2 mx-2'>
                                <Link href='/login'>
                                    <a className="my-3" style={{textDecoration: 'none', color: 'black'}}>Login</a>
                                </Link>
                            </li>
                            <li  className='my-2 mx-2'>
                                <Link href='/register'>
                                    <a className="my-3" style={{textDecoration: 'none', color: 'black'}}>Register</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Nav>
        </Navbar>
    );
}

export default NavbarHome;