import React from 'react'
import Card from '../Components/HomePage/Card'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import img1 from '../assets/about1.jpg'
import img2 from '../assets/about2.png'
import img3 from '../assets/about3.jpg'
import img4 from '../assets/about4.jpg'

export default function About() {
    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12" className="text-center"><h2><strong>Crew</strong></h2></MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="6"><Card img={img1} name={"Subramanian"} email={"bagavath06@gmail.com"} /></MDBCol>
                    <MDBCol md="6"><Card img={img2} name={"Sabaritha"} email={"msabaritha@gmail.com"} /></MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="6"><Card img={img3} name={"Santhiya"} email={"santhiys@gmail.com"} /></MDBCol>
                    <MDBCol md="6"><Card img={img4} name={"Reethu"} email={"reethum@gmail.com"} /></MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}
