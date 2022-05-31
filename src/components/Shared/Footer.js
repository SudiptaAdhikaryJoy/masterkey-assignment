import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <div class="container text-center text-md-left">
            <div className="row text-center text-md-left text-lg-left">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-md-start text-lg-start text-xl-start">
                    <h4 className="mb-4">We are Social</h4>
                    <h4>Follow Us</h4>
                    <a href="#"><box-icon type='logo' name='instagram' animation='tada'></box-icon></a>
                    <a href="#"><box-icon type='logo' name='facebook-circle' animation='tada'></box-icon></a>
                    <a href="#"><box-icon style={{color:'red'}} name='youtube' type='logo' animation='tada' ></box-icon></a>
                    <h1>LOGO</h1>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3 text-md-start text-lg-start text-xl-start">
                    <h4 className="mb-4" style={{color: "#644F9c"}}>Links</h4>
                    <p>
                        <a href="#" className="fw-bold text-uppercase" style={{color: "black", textDecoration:'none'}}>Advertisement</a>
                    </p>
                    <p>
                        <a href="#" className="fw-bold text-uppercase" style={{color: "black", textDecoration:'none'}}>Publishers</a>
                    </p>
                    <p>
                        <a href="#" className="fw-bold text-uppercase" style={{color: "black", textDecoration:'none'}}>Influencers</a>
                    </p>
                    <p>
                        <a href="#" className="fw-bold text-uppercase" style={{color: "black", textDecoration:'none'}}>Ad Formats</a>
                    </p>
                </div>
                {/* Documentation section */}
                <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3 text-md-start text-lg-start text-xl-start">
                    <h4 className="mb-4" style={{color: "#644F9c"}}>Documentation</h4>
                    <p>
                        <a href="#" className="fw-bold text-uppercase" style={{color: "black", textDecoration:'none'}}>Terms & conditions</a>
                    </p>
                    <p>
                        <a href="#" className="fw-bold text-uppercase text-md-start text-lg-start text-xl-start" style={{color: "black", textDecoration:'none'}}>Privacy & policy</a>
                    </p>
                    <p>
                        <a href="#" className="fw-bold text-uppercase text-md-start text-lg-start text-xl-start" style={{color: "black", textDecoration:'none'}}>cancellation policy</a>
                    </p>
                    <p>
                        <a href="#" className="fw-bold text-uppercase text-md-start text-lg-start text-xl-start" style={{color: "black", textDecoration:'none'}}>Blog</a>
                    </p>
                </div>

                {/* Support Section */}
                <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3 text-md-start text-lg-start text-xl-start">
                    <h4 className="mb-4" style={{color: "#644F9c"}}>Support</h4>
                    <p>
                        <a href="#" className="fs-6 text-uppercase" style={{color: "black", textDecoration:'none'}}>faq</a>
                    </p>
                    <p>
                        <a href="#" className="fs-6 text-uppercase text-md-start text-lg-start text-xl-start" style={{color: "black", textDecoration:'none'}}>media kit</a>
                    </p>
                    <p>
                        <a href="#" className="fs-6 text-uppercase text-md-start text-lg-start text-xl-start" style={{color: "black", textDecoration:'none'}}>contact us</a>
                    </p>
                </div>
            </div>
            <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
    </>
  )
}
