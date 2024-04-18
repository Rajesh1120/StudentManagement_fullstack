import {Route,Routes} from 'react-router-dom';
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Details from './components/Details'; 
import Signup from './signupIn/SignUp';
import Signin from './signupIn/SignIn';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/add" element={<Add />}></Route>
      <Route path="/edit/:rollno" element={<Edit />}></Route>
      {/* <Route path='/delete/:id' element={<Delete />}></Route> */}
      <Route path="/details/:rollno" element={<Details />}></Route>
    </Routes>
  );
}

export default App;
