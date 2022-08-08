import React,{useState} from 'react'
import './AlertExample.css'
import { useDispatch } from 'react-redux'
let newAlertInput = {text:"",link:"",timeLimit:10,alertType:"",alertTitle:""}
const AlertExample = () => {
  const dispatch = useDispatch()
   const[input,setInput]= useState(newAlertInput)
  const handleSubmit = (e) => {
    e.preventDefault()
    const {name,value} = e.target
    setInput({ ...input, [name]: value })
    console.log('input',input)

  }
  const onformSubmit = (e) => {
     e.preventDefault()
    console.log(input)
    
       dispatch({
      type: 'addingAlert','payload':input
    })
      
   
    
  }
  
  return (
    <div>
      <h3>Alert inputs</h3>
        <form className="alertform" onSubmit={onformSubmit}>
    
        <lable>Text</lable>
        <input type="text" name="text" onChange={handleSubmit} value={input.text} />
        <label>Link
        </label>
        <input type="link" name="link" onChange={handleSubmit} value={input.link} />
        <label>time limit</label>
        <input type="number" name="timeLimit" onChange={handleSubmit} value={input.timeLimit } />
        <lable>Alert Type</lable>
        <input type="text" name="alertType" onChange={handleSubmit} value={input.alertType} />
        <lable>Alert Title</lable>
        <input type="text" name="alertTitle" onChange={handleSubmit} value={input.alertTitle} />
        <button type="submit">Create New Alert</button>
    
        </form>
    
      </div>
  )
}

export default AlertExample