import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import '../../Style/Form.css'
import { database } from '../../config/firebase'

const FormPage = (props) => {
    const [signupInfo, setInfo] = useState({});
    const handleChange = (e) => {
        let tmp = { ...signupInfo }
        tmp[e.target.name] = e.target.value;
        setInfo(tmp)
    }

    const signup = () => {
        const write = database.ref().push().set({
            ...signupInfo
        })
        alert("Sign up successful !!!")
        props.change("login")
    }
    return (
        <div className="signup">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='3' />
                    <MDBCol md='6'>
                        <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                            <div className='text-center'>
                                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                                    <strong>SIGN</strong>
                                    <a href='#!' className='green-text font-weight-bold'>
                                        <strong> UP</strong>
                                    </a>
                                </h3>
                            </div>
                            <MDBInput
                                label="Your name"
                                labelClass='white-text'
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                name="name"
                                onChange={e => handleChange(e)}
                            />
                            <MDBInput
                                label="Your email"
                                labelClass='white-text'
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                                name="email"
                                onChange={e => handleChange(e)}
                            />
                            <MDBInput
                                label="Your password"
                                labelClass='white-text'
                                group
                                type="password"
                                validate
                                name="pass"
                                onChange={e => handleChange(e)}
                            />
                            <MDBRow className='d-flex align-items-center mb-4'>
                                <div className='text-center mb-3 col-md-12'>
                                    <MDBBtn
                                        color='success'
                                        rounded
                                        type='button'
                                        onClick={() => signup()}
                                        className='btn-block z-depth-1'
                                    >
                                        Sign Up
              </MDBBtn>
                                </div>
                            </MDBRow>
                            <p className='font-small white-text d-flex justify-content-center'>
                                Already have an account?
              <a onClick={() => props.change("login")} className='green-text ml-1 font-weight-bold'>
                                    Sign in
              </a>
                            </p>
                        </div>
                    </MDBCol>
                    <MDBCol md='3' />
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default FormPage;





