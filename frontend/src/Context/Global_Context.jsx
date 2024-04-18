import { createContext , useState } from "react";

export const GlobalContext=createContext(null);

export default function GlobalState({children}){
    const [formData,setFormData]=useState({
        
        rollno:"",
        studentName:"",
        branch:"",
        gender:"",
        
    })
   const [formDataList,setFormDataList]=useState([]);
   const [isEdit, setIsEdit]=useState(false);
   

    return (
        <GlobalContext.Provider value={ {formData,setFormData,formDataList,setFormDataList,isEdit,setIsEdit} }>
            {children}
        </GlobalContext.Provider>
    )
}
