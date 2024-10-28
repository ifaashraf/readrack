import React,{useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function View() {
  const [data, setData]=useState([])
  const {id} = useParams();

  useEffect(()=>{
    axios.get('https://rrserver-1.onrender.com'+id)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  },[])
  return (
    <>
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center 'style={{background: "white"}}>
      <div className=' border bg-primary shadow px-5 pt-3 pb-5 rounded'>
        <h4 className='text-light d-flex justify-content-center align-items-center h4'>Details</h4>
        <form action="">
          <div className='mb-2'>
          <strong className='text-light'>Title : {data.name}</strong>

          </div>
          <div className='mb-2'>
          <strong className='text-light'>Author : {data.category}</strong>
         </div>
          <div className='mb-3 mt-4 d-flex justify-content-between'>
            <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
            <Link to="/home" className='btn btn-primary ' >Back</Link>
          </div>
          
          
        </form>
      </div>
    </div>
    </>
  )
}

export default View