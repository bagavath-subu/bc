import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import '../../Style/Form.css'
import { database } from '../../config/firebase'
import auth from '../auth'
import { ToastContainer, toast } from 'react-toastify';


const FormPage = (props) => {
  const history = useHistory();
  const [signinInfo, setInfo] = useState({});
  const handleChange = (e) => {
    let tmp = { ...signinInfo }
    tmp[e.target.name] = e.target.value;
    setInfo(tmp)
  }

  const login = () => {
    const results = database.ref().on('value', data => {
      if (data.val() !== null) {
        let obj = data.val();
        let res = Object.keys(obj).map(key => {
          return {
            id: key,
            name: obj[key].name,
            email: obj[key].email,
            pass: obj[key].pass
          }
        });
        console.log(res)
        var loginStatus = false
        res.map(r => {
          if (r.email === signinInfo.email && r.pass === signinInfo.pass) {
            loginStatus = !loginStatus
            localStorage.setItem("info", JSON.stringify({
              "name": r.name,
              "email": r.email
            }))
          }
        })
        if (loginStatus) {
          auth.login(() => history.push("/home"))
        }
        else {
          setInfo({})
          toast.error("Login Failed");
        }
      }
    });
  }

  return (
    <div className="login">
      <MDBContainer>
        <MDBRow>
          <MDBCol md='3' />
          <MDBCol md='6'>
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>LOG</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> IN</strong>
                  </a>
                </h3>
              </div>
              <MDBInput
                label='Your email'
                group
                type='text'
                validate
                labelClass='white-text'
                name="email"
                value={signinInfo.name}
                onChange={e => handleChange(e)}
              />
              <MDBInput
                label='Your password'
                group
                type='password'
                validate
                labelClass='white-text'
                name="pass"
                value={signinInfo.pass}
                onChange={e => handleChange(e)}
              />
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                    color='success'
                    rounded
                    type='button'
                    onClick={() => login()}
                    className='btn-block z-depth-1'
                  >
                    Login
              </MDBBtn>
                </div>
              </MDBRow>
              <p className='font-small white-text d-flex justify-content-center'>
                Have an account?
              <a onClick={() => props.change("signup")} className='green-text ml-1 font-weight-bold'>
                  Sign up
              </a>
              </p>
            </div>
          </MDBCol>
          <MDBCol md='3' />
        </MDBRow>
      </MDBContainer>
      <ToastContainer />
    </div>
  );
};

export default FormPage;