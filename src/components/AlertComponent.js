import React,{useState,useEffect} from 'react'
import  {Alert,AlertTitle,Button} from '@mui/material'
import './Alert.css'
import { useSelector, useDispatch } from 'react-redux'

const AlertComponent = () => {
  const alerts = useSelector(state => state)
  const dispatch = useDispatch()
  //const [newalert,setNewalert] = use
  console.log("alert",alerts)
  //let message = "error"
  const handleDeleteAlert = (id) => {
    dispatch({type:'deletingAlert',id:id})
  }
  return (
    <div>
      {alerts.map(alert => {
        return(
          <Alert severity={alert.alertType} className="alert" >
            <AlertTitle>{ alert.title} alert</AlertTitle>
        There is {alert.text} <a href='www.google.com'><strong></strong> alert check it out </a> 
        <Button onClick={handleDeleteAlert}>delet alert</Button>
</Alert>)
      })}      
  
    </div>
  )
}

export default AlertComponent