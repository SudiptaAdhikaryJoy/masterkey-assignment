import React, { useState } from 'react';
import Data from './data';
import './SectionTwo.css';
export default function SectionOne() {
    const [items, setItems] = useState(Data);

    const filterItem = (cateItem)=>{
        const updatedItems = Data.filter((curElem)=>{
            return curElem.name === cateItem
        })

        setItems(updatedItems);
    }

  return (
    <>
        <h3>----<span style={{color: '#644F9c'}}>VERSATILE AD FORMATS</span>----</h3>
        <div className="container">
            <div className="d-flex justify-content-around">
                <button className="btn active  rounded-pill" onClick={()=> filterItem('POP-UNDER')}>POP-Under</button>
                <button className="btn rounded-pill" onClick={()=> filterItem('BANNER AD')}>BANNER AD</button>
                <button className="btn  rounded-pill" onClick={()=> filterItem('NATIVE')}>NATIVE</button>
                <button className="btn  rounded-pill" onClick={()=> filterItem('SKIM')}>SKIM</button>
            </div>
        </div>

        {/* main items */}
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-12 col-md-3 col-lg-12">
                    <div className="row my-5">

                        {
                            items.map((elem)=>{
                               const{ id, name, image, description} = elem;
                               return (
                                    <div className="row text-center text-md-left text-lg-left">
                                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-4  p-2 mb-5 bg-body border">
                                            <img className="img-fluid" src={image} alt="" />           
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-4 text-md-start text-lg-start text-xl-start">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
        
    </div>
                               )
                            })
                        };
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
