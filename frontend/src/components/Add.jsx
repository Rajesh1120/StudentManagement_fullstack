
import { useContext, useState} from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Context/Global_Context";

function Add(){
    const {formData,setFormData,formDataList,setFormDataList}=useContext(GlobalContext);
    const [message,setMessage] =useState("") 

    function handleSubmit(e){
        e.preventDefault();
        const index=formDataList.findIndex(rollnum => rollnum.rollno === formData.rollno)
       
        if (index===-1){
            setFormDataList(prevList => ([
                ...prevList, 
                formData
            ]));
            
            setMessage("Successfully added");
        }
        else{
            setMessage("Rollno already registered");
        }
        setFormData(
            {
                rollno:"",
                studentName:"",
                branch:"",
                gender:"",
            }
        )  
    }
   
    
    function handleChange(name,value){
        setFormData(pervdata => ({
            ...pervdata,
            [name]:value
        }))  
    }
    
    return(
        <>
        <div className="form-container">
            <form onSubmit={(e)=> handleSubmit(e)}>
            <p className="msg">{message !== "" ? message: null}</p> 
                <label>Student RollNo:</label><input type="number"  autoFocus value={formData.rollno} onChange={(e)=> handleChange(e.target.name,e.target.value)} name="rollno" placeholder="Enter StudentRollno"  required />
                <label>Studentname:</label><input type="text" value={formData.studentName} onChange={(e)=> handleChange(e.target.name,e.target.value)} name="studentName" placeholder="Enter StudentName" required/>
                <label>Branch:</label><input type="text" value={formData.branch} onChange={(e)=> handleChange(e.target.name,e.target.value)}name="branch" placeholder="Enter your branch in short form" required/>
                <label>Gender:</label>
                
                <select name="gender"  required value={formData.gender} onChange={(e)=>handleChange(e.target.name,e.target.value)}>
                    <option id="opt1" value="">Select Gender</option>
                    <option className="opt" value="male">Male</option>
                    <option className="opt" value="female">Female</option>
                </select>

              <button type="submit" >Add</button>
              <NavLink to = "/home"><button>Go back</button></NavLink>
            </form>
        </div>
        </>
    )
}

export default Add;