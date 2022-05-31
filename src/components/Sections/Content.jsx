import React from 'react'
// import './Content.css'
import 'boxicons'

export default function Content() {
  return (
    <>
        <div className="bg-light mt-3 py-5">
        <h3>------- <span style={{color:"#644F9C"}}> AVAILABLE FOR EVERYONE </span> --------</h3>
        <p>Here we are for you</p>
            <div className="container-fluid">
        <div className='d-flex justify-content-around'>
            <div className="row mx-auto">
            <div className="col-12 col-md-4 col-lg-4 border rounded-circle p-5 shadow mx-auto"> 
                    <i class='bx bxs-volume-low' style={{color:'blue', fontSize:"50px"}}></i>
            </div>
                    <p>Hear from Us</p>
                    <button style={{backgroundColor: "#644F9C"}} className="border rounded-pill mx-2 ">Tap 2</button>     
        </div>
            <div className="row mx-auto">
            <div className="col-12 col-md-4 col-lg-4 border rounded-circle p-5 shadow mx-auto"> 
                    <i class='bx bxs-paper-plane' style={{color:'blue', fontSize:"50px"}}></i>      
            </div>
                    <p>Hear from Us</p>
                    <button style={{backgroundColor: "#644F9C"}} className="border rounded-pill mx-2 ">Tap 2</button>     
        </div>
            <div className="row mx-auto">
            <div className="col-12 col-md-3 col-lg-4 border rounded-circle p-5 shadow mx-auto"> 
                    <i class='bx bxs-user-voice' style={{color:'blue', fontSize:"40px"}}></i>       
            </div>
                    <p>Hear from Us</p>
                    <button className="border rounded-pill mx-2 " style={{backgroundColor: "#644F9C"}}>Tap 3</button>     
        </div>
            </div>    
    </div>
        </div>
    </>
  )
}
