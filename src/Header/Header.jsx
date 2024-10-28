import React from 'react'
import { Navbar,Container } from 'react-bootstrap'


function Header() {
  return (
   <>
      <Navbar className='bg-primary text-light'>
        <Container>
          <Navbar.Brand href="#home" className='text-light'>
          <i className="fa-solid fa-swatchbook" style={{color: "white"}}/>
          {' '}
            ReadRack
          </Navbar.Brand>
        </Container>
      </Navbar>

   </>
  )
}

export default Header