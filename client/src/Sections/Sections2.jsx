import React from 'react'
import './Sections2.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
function Sections2() {
    const navigate = useNavigate()

    function top(){
        scrollTo({ top: 0 });
        navigate("/Mens")
    }
  return (
    <div>
     <section id="collection">
        <div className="collections container">
            <div className="content2">
                <img src="https://kingdomofwhite.com/cdn/shop/files/DSCF6891_3000x.jpg?v=1709274862" alt="img" />
                <div className="img-content2">
                    <p>Mens's Collections</p>
                    <button onClick={top}>SHOP NOW</button>
                </div>
            </div>
            <div className="content2">
                <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/20695836/2022/11/10/ba1724c2-c606-481c-a0ca-63424b61a8661668078028270WomensRayonPrintedEmbroideredKurtaWithPantAndDupatta1.jpg" alt="img" />
                <div className="img-content2">
                    <p>Women's Collections</p>
                    <button><a href="#sellers">SHOP NOW</a></button>
                </div>
            </div>
            <div className="content3">
                <img src="https://cdn.shopify.com/s/files/1/0086/0150/1792/files/boys_wear_-_summer_collection.jpg?v=1588577244" alt="img" />
                <div className="img-content3">
                    <p>Kids Collections</p>
                    <button><a href="#sellers">SHOP NOW</a></button>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Sections2