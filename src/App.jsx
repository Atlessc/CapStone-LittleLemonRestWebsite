import "./App.css";
import NavBar from "./components/navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import Reservations from "./pages/Reservations";
// import OrderOnline from "./pages/OrderOnline";
// import Login from "./pages/login";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<Reservations />} />
        {/* <Route path="/order-online" element={<OrderOnlinePage />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
