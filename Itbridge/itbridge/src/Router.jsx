import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import OurWork from "./Pages/OurWork";
import OurService from "./Pages/OurService";
import Career from "./Pages/Career";
import OurWorkDes from "./Pages/OurworkDes";
import Layout from "./Component/Layout";
import OurserviceDes from "./Pages/OurserviceDes";

function Router() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ourwork" element={<OurWork />} />
          <Route path="ourservice" element={<OurService />} />
          <Route path="career" element={<Career />} />
          <Route path="/ourworkdes/:id" element={<OurWorkDes />} />
          <Route
            path="/servicedetails/:serviceName"
            element={<OurserviceDes />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
