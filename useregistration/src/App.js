
 
import {BrowserRouter, Route, Routes, Link, Outlet} from 'react-router-dom'
import UserRegistration from "./Pages/UserRegistration/UserRegistration.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import Login from './Pages/Log-in/Login.jsx';

function App() {
  return (

    <BrowserRouter>
     <h1>User Registration</h1>
          
      {/* <div>
        <Link path='/'>User Profile</Link>
        <br/>
        <Link to='/login'>Login</Link>
        <br/>
        <Link to='/registration'>User Registration</Link>
      </div> */}

        <Routes>
          <Route path='/' element={<PrivateRoutes/>} /> 
          <Route path='/login' element={<Login/>}/>       
          <Route path='/registration' element={<UserRegistration/>}/>
        </Routes>
   

    </BrowserRouter>

  
  );
}

export default App;
