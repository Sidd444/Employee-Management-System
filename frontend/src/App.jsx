import { useState, useEffect } from 'react'
import './App.css'
import AddEmployeForm from './components/AddEmployeForm'
import LandingPage from './components/LandingPage'
import axios from 'axios'
import Employee from './components/Employee'

function App() {
  const [formDisplay,setFormDisplay] = useState(false)
  function toggleForm(){
    setFormDisplay(!formDisplay);
  }
  const [arr,setArr]=useState([]);
  

  useEffect(()=>{
    const fetchEmployees=async()=>{
      try{
        const response=await axios.get('http://localhost:8080/employees/view/all');
        setArr(response.data);
      }catch(error){
        console.log("error getting employees"+error);
      }
    }
    fetchEmployees();
  },[]);

  

  return (
    <>
     {formDisplay && <AddEmployeForm {...{toggleForm}}/>}
     <LandingPage {...{toggleForm}}/>
     <div>
     <main>
            {console.log(arr)}
            {arr.map((employee,index)=>{
                <Employee key={index} {...{employee}}/>
            })}
            {/* <Employee
            firstName="Some"
            lastName="hhh"
            department="nkjn"
            position="joj"
            salary="dkjodj"
            /> */}
        </main>
     </div>
    </>
  )
}

export default App
