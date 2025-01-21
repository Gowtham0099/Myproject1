import { ErrorMessage, Formik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'
import * as yup from "yup"

function Signup() {
    let navigate=useNavigate()
    let [user, setusername] = useState({
        username: "",
        newpassword: "",
        confirmpassword: "",
        gender: "",
        gmail: "",
        phonenumber: ""
    })
    let validation=yup.object().shape({
        username:yup.string().required(),
        newpassword:yup.string().matches(/[A-Z][a-z]+[0-9]{1,}\W/,"it should contain special character,uppercase,number").min(8,"password should be in minimum length of 8").required(),
        confirmpassword:yup.string().oneOf([yup.ref("newpassword"),null],"password should to be matched").required(),
        gender:yup.string().required("Gender needed"),
        gmail:yup.string().email("Email is required").required(),
        phonenumber:yup.string().matches(/[0-9]{10}/,"enter vaild mobile number").max(10).required()



                                                                                                                                            


    })

    let handleInput = (e) => {
        setusername({ ...user, [e.target.name]: e.target.value })
    }
    let handleSubmit = (e) => {
        // e.preventDefault()
        console.log(user)
        localStorage.setItem("username",user.username)
        localStorage.setItem("password",user.newpassword)

        // alert(`username: ${username.username} - newpassword:${username.newpassword}`)
        setusername({
            username: "", newpassword: "", confirmpassword: "", gender: "", gmail: "", phonenumber: ""
        })
    }

    
    let handleCancel = () => {
        setusername({
            username: "", newpassword: "", confirmpassword: "", gender: "", gmail: "", phonenumber: ""
        })
    }
    return (
        <div className='page'>
            <div className='sign'>
            <Formik
            initialValues={user}
            validationSchema={validation}
            onSubmit={handleSubmit}>
                {({handleSubmit,handleChange})=>(
            <form onSubmit={handleSubmit}>
                <h1>Signup page.</h1>
                <h4>Username</h4>
                
                <input className='t' type='text' onChange={(e)=>{handleInput(e);handleChange(e)}} name="username" value={user.username} placeholder='Username' />
                <ErrorMessage name='username' component="div" className='text-danger'/>
                <h4>New Password</h4>
                <input className='t' type='password' onChange={(e)=>{handleInput(e);handleChange(e)}} name="newpassword" value={user.newpassword} placeholder='newpassword' />
                <ErrorMessage name='newpassword' component="div" className='text-danger'/>
                <h4>Confirm Password</h4>
                <input className='t' type='password' onChange={(e)=>{handleInput(e);handleChange(e)}} name="confirmpassword" value={user.confirmpassword} placeholder='confirmpassword' />
                <ErrorMessage name='confirmpassword' component="div" className='text-danger'/>
                <h4>Gender</h4>

                <input type='radio' name='gender' value="Male" onChange={(e)=>{handleInput(e);handleChange(e)}} />Male
                <input type='radio' name='gender' value="Female" onChange={(e)=>{handleInput(e);handleChange(e)}} />Female
                <input type='radio' name='gender' value="Others" onChange={(e)=>{handleInput(e);handleChange(e)}} />Others
                <ErrorMessage name='gender' component="div" className='text-danger'/>


                <h4>Email Address</h4>
                <input className='t' type='text'onChange={(e)=>{handleInput(e);handleChange(e)}} name="gmail" value={user.gmail} placeholder='gmail' />
                <ErrorMessage name='gmail' component="div" className='text-danger'/>
                <h4>Phone Number</h4>
                <input className='t' type='number' onChange={(e)=>{handleInput(e);handleChange(e)}} name="phonenumber" value={user.phonenumber} placeholder='phonenumber' />
                <ErrorMessage name='phonenumber' component="div" className='text-danger'/>
                <br></br>
                <br></br>
                <button className='t' type="submit">Submit</button>

                {/* <button className='b' href='#' >Submit</button> */}
                <button className='t' type="button" onClick={handleCancel}>Cancel</button>
                <p>Already have account?</p>
                <a href='#' onClick={(e)=>{e.preventDefault();navigate('/')}}>login</a>
               <br></br>
                 <a href='#' onClick={(e)=>{e.preventDefault();navigate('/Dashboard')}}>Dashboard</a>
               





            </form>
            )}
            </Formik>
            </div>
        </div>
    )
}

export default Signup
