import { NavLink, useParams } from "react-router-dom";
import { useContext,useState } from "react";
import { GlobalContext } from "../Context/Global_Context";

function Edit(){
    const {formData,formDataList,setFormDataList ,setFormData}=useContext(GlobalContext);
    const {rollno}=useParams();
    const [message,setMessage] =useState("") 
    function handleUpdated(e){
        e.preventDefault();
        const index=formDataList.findIndex(rollNum => rollNum.rollno===rollno);
        const updatedList3=[...formDataList];
        if (index !== -1){
            updatedList3[index]={
                rollno:formData.rollno,
                studentName:formData.studentName,
                branch:formData.branch,
                gender:formData.gender
            }
        
        setFormDataList(updatedList3)
             setMessage("Successfully edited")
        }
        setFormData({
                rollno:"",
                studentName:"",
                branch:"",
                gender:"",
            })  
        
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
                <form >
                    {message !== ""? <p className="msg">{message}</p> : null}
                    <label>Student RollNo:</label><input type="number"  disabled value={formData.rollno}onChange={(e)=> handleChange(e.target.name,e.target.value)} name="rollno" placeholder="Enter StudentRollno"  required />
                    <label>Studentname:</label><input type="text" autoFocus value={formData.studentName} onChange={(e)=> handleChange(e.target.name,e.target.value)} name="studentName" placeholder="Enter StudentName" required/>
                    <label>Branch:</label><input type="text" value={formData.branch} onChange={(e)=> handleChange(e.target.name,e.target.value)}name="branch" placeholder="Enter your branch in short form" required/>
                    <label>Gender:</label><select name="gender"  required value={formData.gender} onChange={(e)=>handleChange(e.target.name,e.target.value)}>
                        <option id="opt1" value="">Select Gender</option>
                        <option className="opt" value="male">Male</option>
                        <option className="opt" value="female">Female</option>
                    </select>

                <button onClick={handleUpdated}>Edit</button>  
                <NavLink to = "/home"><button >Go back</button></NavLink>
                </form>
            </div>
        </>
    )
}

export default Edit;