import React from 'react'
import '../../Style/Card.css'
export default function Card(props) {
  const { img, name, email } = props
  return (
    // <div classNameName="Card">
    //     <img classNameName="img" src={img} alt="" width="auto" height="250px" />
    //     <h1>{name}</h1>
    // </div>
    <>
      <div align="center" className="fond">


        <div className="carreaux_presentation_light" style={{ backgroundImage: `url(${img})` }}>
          <div className="shadow_swhow_mini">
            <div className="deroul_titre">{name}</div>
            <div className="deroul_soustitre">{email}</div>
          </div>
        </div>
      </div>
    </>
  )
}

