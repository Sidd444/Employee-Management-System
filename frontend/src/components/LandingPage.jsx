import React from 'react'

export default function LandingPage(props) {
 
  return (
    <div>
        <header className='flex justify-between gap-64 bg-sky-400 rounded-3xl p-5' style={{marginTop:"-3%"}}>
            <img className='h-16 w-16 mr-10' src="https://cdn3.iconfinder.com/data/icons/team-management/136/19-1024.png" alt="logo" />
            <p className='mt-2 font-bold text-3xl text-white'>Employee Manager</p>
            <button onClick={()=>props.toggleForm()}  className='w-60 bg-green-600 text-white ml-10 rounded-3xl h-14'>Add New Employee</button>
        </header>
       
    </div>
  )
}
