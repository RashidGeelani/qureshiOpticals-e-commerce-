import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";


function App() {

  return (
    <>
      <BrowserRouter>
      <ToastContainer />
        <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Reset" element={<Reset />} />
          </Routes>
        <Footer />
        
      </BrowserRouter>
    </>
  )
}

export default App
