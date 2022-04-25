
import './App.css';
 import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import { Route,Routes} from "react-router-dom";
import UserDetail from './components/UserDetail';
import Users from './components/Users';
import { PrivateComponent } from './components/PrivateComponent';
import { Login } from './components/Login';

function App() {
return (
<div>
<Navbar/>
<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/about" element={<About />}></Route>
  <Route path="/user" element={<Users />}></Route>
  <Route path="/login" element={<Login />}></Route>
  <Route path="/user/:id" element={
    <PrivateComponent>
     <UserDetail />
    </PrivateComponent>
  }></Route>
</Routes>
</div>
  );
}

export default App;
