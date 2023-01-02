import { Routes, Route } from "react-router-dom";
import { ProductProvider } from "../contexts/CartContext";
import UserProvider from "../contexts/UserContext";
import HomePage from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<UserProvider><LoginPage/></UserProvider>} />
      <Route path="/register" element={<UserProvider><RegisterPage/></UserProvider>} />
      <Route path="/home" element={<ProductProvider><HomePage/></ProductProvider>}/>
    </Routes>
  );
};

export default RoutesPage;
