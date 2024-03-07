import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/home";
import Records from "./Page/records";
import Analyzer from "./Page/analyzer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/records" element={<Records />} />
      <Route path="/analyser" element={<Analyzer />} />
    </Routes>
  );
}

export default App;
