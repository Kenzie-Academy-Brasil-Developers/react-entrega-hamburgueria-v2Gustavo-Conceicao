import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import { ProductProvider } from "../contexts/CartContext";
import UserProvider from "../contexts/UserContext";
import HomePage from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const RoutesPage = () => {
  return (
      <UserProvider>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route element={<ProtectedRoutes/>} >
            <Route path="/home" element={<ProductProvider><HomePage/></ProductProvider>}/>
          </Route>
        </Routes>
      </UserProvider>
  );
};

export default RoutesPage;
