import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Signin(){
    const [signinData,setSigninData]=useState({})
    const navigate = useNavigate();

    function handleChange(names,values){
        setSigninData(prev => ({
            ...prev,
            [names]:values
        }))
    }
    function handleSubmit(e){
        e.preventDefault();
        
        axios.post("http://localhost:8081/signin",signinData)
        .then(res => {
            if (res.data === "success"){
                navigate("/home")
            }else{
                alert("No records existed")
            }
        })
        .catch(err=> console.log(err));
    }
    return(
        <>
        <div className="signin">
            <form id="form-signin" onSubmit={handleSubmit}>
                <h3>SignIn</h3>
                <label>Email:</label><input type="email" name="email" onChange={(e)=>handleChange(e.target.name,e.target.value)} placeholder="Enter Email" />
                <label>Password:</label><input type="password" name="password" onChange={(e)=>handleChange(e.target.name,e.target.value)}placeholder="Enter Password"/>
                <button className="btn-signin">SignIn</button>
                <p>Create an account?<NavLink className="signinlink" to ="/">SignUp</NavLink></p>
            </form>
        </div>
        </>
    )
}