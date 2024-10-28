import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';


function Add() {
  const [values,setValues]=useState({
    name: '',
    category: ''
})


const navigate = useNavigate();

const handleSubmit = (event)=>{
  event.preventDefault();
  if(values.name && values.category){
    axios.post('https://rrserver-1.onrender.com',values)
    .then(res => {
    console.log(res);
    navigate('/')
    alert("Submitted")
    
  })
  .catch(err => console.log(err));
  }else{
    alert("Enter valid input")
  }
  
}
  return (
    <>
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center ' style={{background: "off-white"}}>
      <div className=' border bg-primary shadow px-5 pt-3 pb-5 rounded'>
        <h4 className='text-light d-flex justify-content-center align-items-center h4'>Add New Books</h4>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-2 text-light'>
            <label htmlFor="name">Title :</label>
            <input type="text" name='name' className='form-control' placeholder='Enter the Book Title'
            onChange={e=>setValues({...values,name:e.target.value})}/>

          </div>
          <div className='mb-2 text-light'>
            <label htmlFor="aothor">Author :</label>
            <input type="text" name='category' className='form-control' placeholder='Enter The Authors name'
            onChange={e=>setValues({...values,category:e.target.value})}/>
          </div>
          <div className='mb-3 mt-4 d-flex justify-content-between'>
            <Link to="/" className='btn btn-danger ' >Back</Link>
            <button className='btn btn-success ms-5 '>Submit</button>
          </div>

          
          
        </form>
      </div>
    </div>
    </>
  )
}

export default Add