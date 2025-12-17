import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Fabric from "./pages/Fabric";
import Design from "./pages/Design";
import ShoulderDesign from "./pages/ShoulderDesign";
import NeckDesign from "./pages/NeckDesign";
import Measurements from "./pages/Measurements";
import Checkout from "./pages/Checkout";
import PersonalDetails from "./pages/PersonalDetails";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fabric" element={<Fabric />} />
        <Route path="/design" element={<Design />} />
        <Route path="/shoulder-design" element={<ShoulderDesign />} />
        <Route path="/neck-design" element={<NeckDesign />} />
        <Route path="/measurements" element={<Measurements />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
