import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup'
import '../../Style/StartPage.css'
export default function StartPage() {
    const [form, setForm] = useState("login")
    const changeForm = (form) => {
        setForm(form)
    }
    return (
        <div className="StartPage">
            {form === "login" ?
                <Login change={changeForm} /> :
                <Signup change={changeForm} />
            }
        </div>
    )
}
