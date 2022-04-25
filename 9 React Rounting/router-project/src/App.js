import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route,Routes} from "react-router-dom";
import Support from './components/Support';
import Mac from './components/Mac';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
return (
<div>
<Navbar/>
<Routes >
  <Route path="/" element={<Home />}></Route>
  <Route path="/support" element={<Support />}></Route>
  <Route path="/mac" element={<Mac />}></Route>
  <Route path="/ipad" element={<Mac />}></Route>
  <Route path="/watch" element={<Mac />}></Route>
  <Route path="/cart" element={<Cart />}></Route>
  <Route path="/store" element={<Mac />}></Route>
  {/* <Route path="/userdetail" element={<UserDetail />}></Route> */}
</Routes>
<Footer/>
</div>
  );
}

export default App;
