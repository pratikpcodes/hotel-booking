import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/sign-in" element={<h1> <SignIn/></h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
