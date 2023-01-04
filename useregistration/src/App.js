

 
import {BrowserRouter, Route, Routes, Link, Outlet} from 'react-router-dom'
import UserRegistration from "./Pages/UserRegistration/UserRegistration.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import TestRoutes from './TestRoutes.jsx';
 


function App() {
  return (

    <BrowserRouter>

     <h1>welcome to bobaCorp</h1>
          
       

        <Routes>
          <Route path='/' element={<PrivateRoutes/>} /> 

          {/* this route is to be deleted */}
          <Route path='/test' element={<TestRoutes/>}/>
         
          <Route path='/registration' element={<UserRegistration/>}/>
          
        </Routes>
   

    </BrowserRouter>


   
  
  );
}

export default App;
