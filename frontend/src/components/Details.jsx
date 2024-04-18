
import {useParams,NavLink} from 'react-router-dom'
import { GlobalContext } from "../Context/Global_Context";
import { useContext, useEffect, useState } from 'react';

function Details(){

    const {formDataList} = useContext(GlobalContext);
    const {rollno} = useParams();
    const [details,setDetails]=useState(0);
    console.log(rollno)
    console.log(formDataList)
    
    useEffect(()=>{
        const foundDetails=formDataList.find((data)=>data.rollno===rollno);
        console.log(foundDetails)
        setDetails(foundDetails);
    },[])
    return(
        <>
        <div className='details1'>
            <div className="details2">
                <p> <label>RollNo: </label>  {details?.rollno}</p>
                <p><label>StudentName:</label>     {details?.studentName}</p>
                <p><label>Branch:  </label>   {details?.branch}</p>
                <p><label>Gender: </label>   {details?.gender}</p>
                <p><NavLink to="/home">Back</NavLink></p>
            </div>
        </div>


        </>
    )
}

export default Details;