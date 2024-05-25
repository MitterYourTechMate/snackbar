import logo from './logo.svg';
import './App.css';
import { Button, TextField, Alert, Snackbar } from '@mui/material';
import { useState } from 'react';
import React from 'react';

function App() {

  const [data, setData] = useState({name:"", email:"", message:""})
  const [open, setOpen] = React.useState({open:false, message:"", severity:"success"});


  const containerStyles = {
    display:"flex",
    flexDirection:"column",
    gap:"20px",
    alignItems:"center",
    justifyContent:"center",
    height:"100vh",
    // backgroundColor:"black"
  }

  const styles = {
    textField:{
      width:"400px"
    },
    button:{
      width:"100px",
      backgroundColor:"black"
    }
  }

  const handleChange = (event) => {

    if(event.target.id === "email"){
      setData({...data, email:event.target.value})
    }
    if(event.target.id === "name"){
      setData({...data, name:event.target.value})
    }
    if(event.target.id === "message"){
      setData({...data, message:event.target.value})
    }

  }

  const handleSubmit = () => {
    if(data.email === ""){
      setOpen({open:true, message:"Email is missing", severity:"error"})
      return
    }
    if(data.name === ""){
      setOpen({open:true, message:"Name is missing", severity:"error"})
      return
    }
    if(data.message === ""){
      setOpen({open:true, message:"Message is missing", severity:"error"})
      return
    }
    setOpen({open:true, message:"Form is submitted", severity:"success"})
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="container" style={containerStyles}>
      <TextField id="email" label="Email" sx={styles.textField} onChange={handleChange}></TextField>
      <TextField id="name" label="Name" sx={styles.textField} onChange={handleChange}></TextField>
      <TextField multiline rows={4} id="message" label="Message" sx={styles.textField} onChange={handleChange}></TextField>
      <Button variant="contained" style={styles.button} onClick={handleSubmit}>SUBMIT</Button>
      <Snackbar open={open.open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:"top", horizontal:"center"}}>
        <Alert
          onClose={handleClose}
          severity={open.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {open.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
