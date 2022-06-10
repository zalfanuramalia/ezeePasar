import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'

function Layout({children}) {
    const {isLoading} = useSelector(state => state.pages)
    useEffect(()=>{
        const body = document.getElementsByTagName('body')
        if(isLoading){
          body.className = 'position-relative overflow-hidden'
        } else {
          body.className = ''
        }
      }, [isLoading])
  return (
    <Container>
      <Card className='shadow-lg'>
        <Navbar/>
        <div >
          {children}      
        </div>
        <Footer />
      </Card>
    </Container>
  )
}

export default Layout