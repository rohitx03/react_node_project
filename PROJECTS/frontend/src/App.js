import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import UpdatePorduct from './components/UpdatePorduct';
import Privatecomp from './components/Privatecomp';
import AddProduct from './components/AddProduct';
import List from './components/List';
function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route element={<Privatecomp></Privatecomp>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/up-product/:id" element={<UpdatePorduct></UpdatePorduct>}></Route>
          <Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="/list" element={<List></List>}></Route>
        </Route>
        <Route path="/sign" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
