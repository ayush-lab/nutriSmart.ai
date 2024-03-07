import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/home";
import Records from "./Page/records";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/records" element={<Records />} />
    </Routes>
  );
}

export default App;
