
import { GlobalContext } from "../Context/Global_Context";
import { useContext, useEffect} from "react";
import { NavLink  } from "react-router-dom";
import { students } from "../fetchdata/fetch";


export default function ListofStudent(){
    const {formDataList ,setFormData,setFormDataList}=useContext(GlobalContext);

    function handleDelete(rollno){
        const index= formDataList.findIndex(rollNum=> rollNum.rollno===rollno)
      if (index !== -1){
        const updatedList=[...formDataList]
        updatedList.splice(index,1)
        setFormDataList(updatedList);
      }
    }
    useEffect(() => {
        
    },[])

    function handleEdit(student){
        
        setFormData({
            rollno:student.rollno,
            studentName:student.studentName,
            branch:student.branch,
            gender:student.gender
            
        })
    }
    return(
        <>
       {formDataList.length > 0 ? <div className="table-container">
            <table border="4">
                <thead>
                    <tr>
                        <th>ROLL NO</th>
                        <th>STUDENT NAME</th>
                        <th>BRANCH</th>
                        <th>GENDER</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
           
            {formDataList.map(student=> 
            <tbody key={student.rollno}>
                <tr >
                    <td>{student.rollno}</td>
               
                    <td>{student.studentName}</td>
                
                    <td>{student.branch}</td>
                
                    <td>{student.gender}</td>
                    <td>
                        <NavLink to ={`/edit/${student.rollno}`}><button onClick={()=>handleEdit(student)}>Edit</button></NavLink>   
                            <button onClick={()=>handleDelete(student.rollno)}>Delete</button>
                          <NavLink to={`/details/${student.rollno}`}> <button>Details</button></NavLink>
                    </td>
                    
                </tr>
                </tbody>
                    )}
             </table>
        </div>  :<p>No  Student is added</p> } 
        </>
    )
}