import React from 'react'
import axios from 'axios';

export default function Employee({employee,fetchEmployees}) {
  const deleteEmployee=async(delId)=>{
    try{
      const response= await axios.delete(`http://localhost:8080/employees/delete/${delId}`);
      console.log(response.data);
      fetchEmployees();
    }catch(error){
      console.log("could not delete employee"+error);
    }
  }
  return (
    <div className="border-2 border-collapse flex justify-between rounded-xl text-white">
        {console.log(employee)}
        <p className="border-2 w-60">Name: {employee.firstName} {employee.lastName} </p>
        <p className="border-2 w-44">Department {employee.department} </p>
        <p className="border-2 w-40">Position {employee.position} </p>
        <p className="border-2 w-40">Salary {employee.salary} </p>
        <button className='bg-red-600 text-white h-10w-full' onClick={()=>deleteEmployee(employee.id)}>Delete</button>
    </div>
  )
}
