import React from 'react'
import axios from 'axios';

export default function addEmployeForm({obj,setObj,toggleForm,fetchEmployees}) {
  
  const handleSubmit=async(event)=>{
      try{
      event.preventDefault();
      const response= await axios.post("http://localhost:8080/employees/add",obj);
      console.log(response.data);
      fetchEmployees();
      toggleForm();
    }catch(error){
      console.log("could not add employee"+error);
    }
  }
  return (
    <div>
      <form
      onSubmit={handleSubmit}
      className='border-2 border-black w-96 rounded-2xl shadow-2xl z-20 bg-gray-100 fixed top-4 left-96'>
        <button onClick={(event)=>{
          event.preventDefault();
          toggleForm();
        }} className='bg-red-600 text-white w-20 mt-2 relative ml-72'>CLose</button>
        <h2 className='text-2xl font-bold mb-3 mt-5'>Add Employee Details</h2>
        <div className='mt-4 mb-4'>
        <p className='font-bold border-black mr-40'>First Name</p>
        <input
        onChange={(event)=>setObj({...obj,firstName:event.target.value})}
        className='w-60 p-2 border-2 border-gray-200 rounded h-8' type="text" placeholder="Enter First Name"/>
        </div>
        <div className='mt-4 mb-4'>
        <p className='font-bold border-black mr-40'>Last Name</p>
        <input
        onChange={(event)=>setObj({...obj,lastName:event.target.value})}
        className='w-60 p-2 border-2 border-gray-200 rounded h-8' type="text" placeholder="Enter Last Name"/>
        </div>
        <div className='mt-4 mb-4'>
        <p className='font-bold border-black mr-36'>Department</p>
        <input
        onChange={(event)=>setObj({...obj,department:event.target.value})}
         className='w-60 p-2 border-2 border-gray-200 rounded h-8' type="text" placeholder="Enter Department Name"/>
        </div>
        <div className='mt-4 mb-4'>
        <p className='font-bold border-black mr-44'>Position</p>
        <input
        onChange={(event)=>setObj({...obj,position:event.target.value})}
         className='w-60 p-2 border-2 border-gray-200 rounded h-8' type="text" placeholder="Enter Position"/>
        </div>
        <div className='mt-4 mb-4'>
        <p className='font-bold border-black mr-44'>Salary</p>
        <input 
        onChange={(event)=>setObj({...obj,salary:event.target.value})}
        className='w-60 p-2 border-2 border-gray-200 rounded h-8' type="text" placeholder="Enter Salary"/>
        </div>
        <button type='submit' className='m-5 w-44 bg-blue-600 text-white'>Submit</button>
      </form>
    </div>
  )
}
