import React from 'react'
import  './SectionTwo.css';

export default function SectionTwo() {
  return (
    <div>
        <div className="color container-fluid">
        <div className="row d-flex mx-auto px-5 pt-5 pb-5">
            <div className="col-12 col-md-3 col-lg-5">
                <div className="border-2 rounded">
                    <h1>1 BN+</h1>
                    <p>Daily Impressions</p>
                </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2 border rounded-circle bg-white">
                <div className="py-5 pb-5" style={{color: "#644F9C"}}>
                    <h1>$ 500K+</h1>
                    <p className="pt-2">Paid</p>
                </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2 border rounded-circle mx-auto">
                <div className="py-5">
                    <h1>1 BN+</h1>
                    <p>Daily Impressions</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
