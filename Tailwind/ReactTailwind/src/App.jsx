import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Layout from "./component/Layout";
import Terms from "./Pages/Terms";
import Signup from "./Pages/Signup";

import AllCategory from "./Pages/AllCategory";
import SingleProduct from "./Product/SingleProduct";
import Addproduct from "./Admin/Addproduct";
import Login from "./component/Login";
import Singlecart from "./Cart/Singlecart";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="Terms" element={<Terms />} />
        <Route path="signup" element={<Signup />} />
        <Route path="allcatagory" element={<AllCategory />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="addproduct" element={<Addproduct />} />
        <Route path="/Carts/:id" element={<Singlecart />} />
      </Route>
    </Routes>
  );
}

export default App;
