import React from 'react'
import { Link } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'

function Home() {
  return (
   <>
      <div className='container-fluid p-5'>
      <Row>
        <div className=''>
        <Col className='d-flex flex-column justify-content-center align-items-center m-3'>
        <img src="https://www.graysinn.org.uk/app/uploads/2020/01/Header-image-2-F.-Bacon.jpg" style={{backgroundImage:'cover'}} alt="" />
          <h2 className='m-3'>Your Ultimate Book Logging System</h2>
          <p style={{textAlign: 'justify'}} className=''>Welcome to ReadRack, your gateway to seamless book tracking. Log in and let your literary journey commence!</p>
            <div className='d-flex justify-content-around align-items-center'>
              <div>
                <Link to={'/add'} className='btn btn-primary shadow rounded m-3'>Log My Book</Link>
              </div>
              <div>
                <Link to={'/view'} className='btn btn-warning shadow rounded'>View My Books</Link>
              </div>
            
            </div>
        </Col>
        </div>
        
      </Row>
    </div>
    <div className='container-fluid p-5 mt-5'></div>

   </>
  )
}

export default Home