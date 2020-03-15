import React, { useState } from "react";
import {
  MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBCard,
  MDBCardBody, MDBCardHeader
} from 'mdbreact';
import '../../Style/Contact.css'
import contact from '../../assets/contact.png'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from "react-toastify";

const service_id = "default_service";
const template_id = "babycry";
const Contact = () => {
  const [message, setMsg] = useState({
    name: null,
    message: null
  })
  const [issending, setStatus] = useState(false)
  const handleChange = e => {
    let tmp = { ...message }
    tmp[e.target.name] = e.target.value;
    setMsg(tmp)
  }
  const send = () => {
    if (message.name && message.message) {
      setStatus(!issending);
      emailjs.send(service_id, template_id, message, "user_XuOV1yvjdnx6B9YuVe1kf")
        .then((response) => {
          setStatus(!issending)
          toast.success("Message sent!!!")
        }, (err) => {
          console.log(err)
          toast.error("Error while sending!!!")
        })
    }
    else {
      toast.error("Please fill details!!!")
    }
  }

  return (
    <div className="contact-content">
      <MDBContainer >
        <MDBRow className="contact-row">
          <MDBCol md="6" sm="12">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded contact-head">
                  <h3 className="my-3 text-center">
                    Connect with us
                </h3>
                </MDBCardHeader>
                <form>
                  <div className="grey-text">
                    <MDBInput label="Your name" name="name" onChange={e => handleChange(e)} value={message.name} icon="user" group type="text"
                      success="right" />
                    <MDBInput type="textarea" name="message" onChange={e => handleChange(e)} rows="2" value={message.message} label="Your message" icon="pencil-alt" />
                  </div>
                  <div className="text-center">
                    <MDBBtn outline color="secondary" onClick={() => send()}>
                      {(!issending) ? "Send" : "Sending"}
                      <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6">
            <img src={contact} alt="" className="contant-boss" />
          </MDBCol>

        </MDBRow>
      </MDBContainer>
      <ToastContainer />
    </div>
  );
};

export default Contact;