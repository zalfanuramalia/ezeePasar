import { Card, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {BsBellFill} from 'react-icons/bs'
import {RiShoppingBag3Fill} from 'react-icons/ri'
import Link from 'next/link';
import {FiMenu} from 'react-icons/fi'

function NavbarHome() {
  return (
            <Navbar expand="lg" className='m-auto'>
                <div >
                    <Link href='/home'>
                        <a>
                            <Image layout='intrinsic' alt='logo' src='/images/logo.png' width={90} height={50} />
                        </a>
                    </Link>
                </div>
                <div>
                    <Form className='mx-5 px-5'>
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Bawang Merah" className=' mx-5' />
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
                <Nav className='text-end'>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link href='/favorite'>
                                <button className="btn position-relative ms-lg-1">
                                    <BsBellFill className="fs-2 text-grey"/>
                                    <div className={`bg-white position-absolute text-white rounded-circle`}>0</div>
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/home'>
                                <button className="btn position-relative ms-lg-1">
                                    <RiShoppingBag3Fill className="fs-2 text-grey"/>
                                    <div className={`bg-white position-absolute text-white rounded-circle`}>0</div>
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item dropdown me-3">
                            <Link href='/home'>
                                <a className="nav-link fw-bold fs-5" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FiMenu className="fs-2 text-grey"/>
                                    <div className='`bg-white position-absolute text-white rounded-circle'>0</div>
                                </a>
                            </Link>
                            <ul className='dropdown-menu bg-color1' aria-labelledby="navbarDropdown">
                                <li>
                                    <Link href='/home'>
                                        <a className="">Profile</a>
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