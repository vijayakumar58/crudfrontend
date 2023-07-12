import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './components/Loginpage';
import Forgotpage from './components/Forgotpage';
import CreateAccount from './components/CreateAccountpage';
import Resetpage from './components/Resetpage';
import Allusers from './components/Allusers';
import Createuser from './components/Createuser';
import Edituser from './components/Edituser';
import Viewuser from './components/Viewuser';
import './App.css';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage></Loginpage>}></Route>
        <Route path='/forgotpage' element={<Forgotpage></Forgotpage>}></Route>
        <Route path='/createaccount' element={<CreateAccount></CreateAccount>}></Route>
        <Route path='/resetpage' element={<Resetpage></Resetpage>}></Route>
        <Route path='/allusers' element={<Allusers></Allusers>}></Route>
        <Route path='/createuser' element={<Createuser></Createuser>}></Route>
        <Route path='/edituser' element={<Edituser></Edituser>}></Route>
        <Route path='/viewuser' element={<Viewuser></Viewuser>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
