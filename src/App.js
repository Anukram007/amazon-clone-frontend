import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "../src/components/Banner";
import Cart from "../src/components/Shopping_Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
