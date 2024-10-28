import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


function Update() {
  const [data, setData]=useState([])
  const {id} = useParams();

  const [values,setValues]=useState({
    name: '',
    category: ''
    
})

const navigate = useNavigate();

  useEffect(()=>{
    axios.get('https://rrserver-1.onrender.com'+id)
    .then(res => {
      setValues(res.data)
    })
    .catch(err => console.log(err));
  },[])

  const handleUpdate=(event)=>{
    event.preventDefault();
    axios.put('https://rrserver-1.onrender.com'+id,values)
    .then(res => {
      console.log(res);
      navigate('/home')
    })
    .catch(err => console.log(err));
  }
  return (
    <>
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center' style={{background: "black"}}>
      <div className='border bg-warning shadow px-5 pt-3 pb-5 rounded'>
        <h4 className='text-secondary d-flex justify-content-center align-items-center h4'>Edit Books</h4>
        <form action="" onSubmit={handleUpdate}>
          <div className='mb-2'>
            <label htmlFor="name">Title :</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Title'
            value={values.name} onChange={e=>setValues({...values,name:e.target.value})}/>

          </div>
          <div className='mb-2'>
            <label htmlFor="category;">Author :</label>
            <input type="text" name='category' className='form-control' placeholder='Enter Author'
            value={values.category} onChange={e=>setValues({...values,category:e.target.value})}/>

          </div>
          <div className='mb-3 mt-4 d-flex justify-content-between'>
            <Link to="/home" className='btn btn-primary ' >Back</Link>
            <button className='btn btn-success ms-5 '>update</button>
          </div>
          
          
        </form>
      </div>
    </div>
  
    </>
  )
}

export default Update