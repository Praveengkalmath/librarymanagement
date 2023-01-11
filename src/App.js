import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './Component/landing';
import AdminLogin from './Component/adminLogin';
import UserLogin from './Component/userLogin';
import AdminPortal from './Component/adminPortal';
import UserPortal from './Component/userPortal';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/admin-login' element={<AdminLogin/>}/>
      <Route path='/user-login' element={<UserLogin/>}/>
      <Route path='/admin/*' element={<AdminPortal/>}/>
      <Route path='/users/*' element={<UserPortal/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
