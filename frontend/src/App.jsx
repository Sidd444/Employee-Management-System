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
  const[obj,setObj]=useState({
    firstName:"",
    lastName:"",
    department:"",
    position:"",
    salary:""
  })
  const [arr,setArr]=useState([]);

  const fetchEmployees=async()=>{
    try{
      const response=await axios.get('http://localhost:8080/employees/view/all');
      setArr(response.data);
    }catch(error){
      console.log("error getting employees"+error);
    }
  }

  useEffect(()=>{
    fetchEmployees();
  },[]);
  return (
    <>
     {formDisplay && <AddEmployeForm {...{toggleForm,fetchEmployees,obj,setObj}}/>}
     <LandingPage {...{toggleForm}}/>
     <div>
     <main className='p-2 shadow-2xl overflow-scroll' style={{height:"70vh",width:"70vw",marginLeft:"10%",marginTop:"3%",borderRadius:"10px"}}>
            {console.log(arr)}
            {arr.map((employee,index)=>(
                <Employee key={index} {...{employee,fetchEmployees}}/>
            ))}
        </main>
     </div>
    </>
  )
}

export default App
