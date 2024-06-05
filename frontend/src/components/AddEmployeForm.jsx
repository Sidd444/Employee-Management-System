import React from 'react'

export default function addEmployeForm(props) {
  return (
    <div>
      <form className='border-2 border-black w-96 rounded-2xl shadow-2xl z-20 fixed bg-gray-100 top-0 left-96'>
        <button onClick={(event)=>{
          event.preventDefault();
          props.toggleForm();
        }} className='bg-red-600 text-white w-20 mt-2 relative ml-72'>CLose</button>
        <h2 className='text-2xl font-bold mb-3 mt-5'>Add Employee Details</h2>
        <div className='mt-4 mb-4'>
        <p className='font-bold border-black mr-40'>First Name</p>
        <input className='w-60 p-2 border-2 border-gray-200 rounded h-8' type="text" placeholder="Enter First Name"/>
        </div>
        <div className='mt-4 mb-4'>
        <p className='font-bold border-black mr-40'>Last Name</p>
        <input className='w-60 p-2 border-2 border-gray-200 rounded h-8' type="text" placeholder="Enter First Name"/>
        </div>
        <div className='mt-4 mb-4'>
        <p className='font-bold border-black mr-36'>Department</p>
        <input className='w-60 p-2 border-2 border-gray-200 rounded h-8' type="text" placeholder="Enter First Name"/>
        </div>
        <div className='mt-4 mb-4'>
        <p className='font-bold border-black mr-44'>Position</p>
        <input className='w-60 p-2 border-2 border-gray-200 rounded h-8' type="text" placeholder="Enter First Name"/>
        </div>
        <div className='mt-4 mb-4'>
        <p className='font-bold border-black mr-44'>Salary</p>
        <input className='w-60 p-2 border-2 border-gray-200 rounded h-8' type="text" placeholder="Enter First Name"/>
        </div>
        <button type='submit' className='m-5 w-44 bg-blue-600 text-white'>Submit</button>
      </form>
    </div>
  )
}
