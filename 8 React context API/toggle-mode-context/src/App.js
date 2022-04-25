
import './App.css';
 import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import { Route,Routes} from "react-router-dom";
import UserDetail from './components/UserDetail';

function App() {
return (
<div>
<Navbar/>
<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/about" element={<About />}></Route>
  {/* <Route path="/userdetail" element={<UserDetail />}></Route> */}
</Routes>
</div>
  );
}

export default App;
