import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import errorImg from "../assests/error.png"
import successImg from "../assests/success.png"

export default function Signup(){
    const [signUpData,setSignUpData]=useState({});
    const navigate= useNavigate();
    const[registered,setRegistered]= useState({
        isRegistered:false,
        message:""
    });
    
    function handleChange(names,values){
        setSignUpData(prevList => ({
            ...prevList,
            [names]:values
        }))
        
    }
    

    function handleSubmit(e){
        e.preventDefault();
        
        if(signUpData['password'] === signUpData['conformpassword'] ){ 
            axios.post("http://localhost:8081/signup",signUpData)
            .then(res => {
                if(res.data === "email is already exist"){
                    setRegistered(prevdata=>(
                        {
                            message:"Email is already exist",
                            isRegistered:true
                        }))
                    // alert();
                }else{
                    setRegistered(prevdata=>(
                        {
                            message:"Successfully registered",
                            isRegistered:true
                        }))
                    
                    // navigate('/signin')
                }
                
            })
            .catch(err=> console.log(err));
        }
        else{
            alert("Password is incorrect")
        }
       
    }   
    console.log(registered.isRegistered)

    function handleClose(){
        if (registered.message === "Successfully registered"){
            navigate('/signin')
        }
        else{
            registered.isRegistered=false
            navigate('/')
        }
    }
    return(
        <>
        
        {registered.isRegistered ?(
            <center>
                <div className="modals">
                    <div className="modal"><h2>{registered.message}</h2>
                    <p>{registered.message === "Successfully registered"?<img src={successImg}  alt="kk"/> 
                        : <img src={errorImg} alt="error" /> }</p>
                    </div>
                    
                    <div className="close">
                        <button onClick={handleClose}className="close-button">Close</button>
                    </div> 
                </div>
            </center> 
        
            ):(
            <div className="signup">
                <form id="form" onSubmit={handleSubmit}>
                <h3>SignUp</h3>
                <label>Username:</label><input type="text" name="username" placeholder="Enter username" onChange={(e)=>handleChange(e.target.name,e.target.value)} />
                <label>Email:</label><input type="email" name="email" placeholder="Enter Email" onChange={(e)=>handleChange(e.target.name,e.target.value)} />
                <label>Phone Number:</label><input type="number" name="phonenumber" placeholder="Enter phone Number"onChange={(e)=>handleChange(e.target.name,e.target.value)} />
                <label>Password:</label><input type="password" name="password"  placeholder="Enter Password"onChange={(e)=>handleChange(e.target.name,e.target.value)} />
                <label>Conform Password:</label><input type="password" name="conformpassword" onChange={(e)=>handleChange(e.target.name,e.target.value)} placeholder="Reenter Password" />
                <button className="btn-signup">Signup</button>
                <p>Already have an account?<NavLink className="signinlink" to ="/signin">SignIn</NavLink></p>
            </form>
        </div>)}
        </>
    )
}