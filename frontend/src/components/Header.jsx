import { useContext } from "react";
import {Link, NavLink} from "react-router-dom";
import { GlobalContext } from "../Context/Global_Context";
function Header(){
    const {setIsEdit } = useContext(GlobalContext);
    return (
        <div className="header">
            <div className="react-oper">
                <h3>React Curd Operations ..</h3>
                
            </div>
            <div className="add">
                <Link to="/add"><button onClick={()=>(setIsEdit(false))}>Add +</button></Link>
                <div id="login">
                    <NavLink to="/"><button>SignUp</button></NavLink>
                    <NavLink to="/signin"><button>SignIn</button></NavLink>
                    <NavLink to="/signin"><button>SignOut</button></NavLink>

                </div>
            </div>

        </div>
    )
}
export default Header;