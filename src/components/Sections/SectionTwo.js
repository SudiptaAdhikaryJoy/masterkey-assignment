import React from 'react'
import  './SectionTwo.css';

export default function SectionTwo() {
  return (
    <div>
        <div className="color container-fluid">
        <div className="mx-auto px-5 pt-5 pb-5 d-flex justify-content-around ms-5">
            <div className="col-12 col-md-3 col-lg-2 border rounded-circle py-5 shadow mx-auto">
                <div className="py-1 text">
                    <h1>1 BN+</h1>
                    <p>Daily Impressions</p>
                </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2 border rounded-circle  bg-white shadow">
                <div className="py-5 pb-5" style={{color: "#644F9C"}}>
                    <h1>$ 500K+</h1>
                    <p className="pt-2">Paid</p>
                </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2 border rounded-circle mx-auto color1 shadow ">
                <div className="py-5 text">
                    <h1>8K+</h1>
                    <p>Global Publishers</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
