
import Login from "./Pages/Log-in/Login.jsx";
import {BrowserRouter, Route, Routes, Link, Outlet} from 'react-router-dom';

import UserRegistration from "./Pages/UserRegistration/UserRegistration.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";

function App() {
  return (

    <BrowserRouter>

    <Routes>
      <Route path='/' element={<PrivateRoutes/>} />
      <Route path='/Login' element={<Login/>}/>
      <Route path='/registration' element={<UserRegistration/>}/>
       
 
    </Routes>

      {/* <div> */}
      {/*   <Link to='/'>User UserProfile</Link> */}
      {/*   <br/> */}
      {/*   <Link to='/login'>Login</Link> */}
      {/*   <br/> */}
      {/*   <Link to='/regitration'>User Registration</Link> */}
      {/*    */}
      {/* </div> */}
      {/*  */}
      {/*  */}

   
   
   

    
    
    
    
  
    

    </BrowserRouter>
  
  );
}

export default App;
