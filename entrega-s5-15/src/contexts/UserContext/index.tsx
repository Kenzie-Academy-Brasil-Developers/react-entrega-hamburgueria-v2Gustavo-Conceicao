import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iLoginFormValues } from "../../pages/LoginPage/@types";
import { iRegisterFormValues } from "../../pages/RegisterPage/@types";
import { api } from "../../services/api";
import { iProduct } from "../CartContext/@types";
import { iChildren, iUser, iUserLogin, iUserRegister } from "./@types";

type userContextProps = {
  userRegister: (formData: iRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void
  userLogin: (formData: iLoginFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void
  user: iUser | null
  logout: () => void
  products: iProduct[]
}


const UserContext = createContext<userContextProps>({} as userContextProps);

const UserProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [products, setProducts] = useState<iProduct[]>([] as iProduct[])
  const navigate = useNavigate()

  useEffect(() => {
    async function autoLogin() {
      const getToken = localStorage.getItem("@token");
        if(getToken){
          try {
            const response = await api.get("/products", {
              headers: {
                Authorization : `Bearer ${getToken}`
              }   
            });
            setProducts(response.data);
            navigate("/home")
          } catch (error) {
            console.log(error);
            localStorage.removeItem("@token");
            navigate("/");
          }
      } else {
        navigate("/");
      }
    };
    autoLogin();
  }, []);

  const logout = () => {
    setProducts([]);
    localStorage.removeItem("@token");
  };

  const userRegister = async (
    formData: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      await api.post<iUserRegister>("/users", formData);
      navigate("/")
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (
    formData: iLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await api.post<iUserLogin>("/login", formData);
      setUser(response.data.user);
      localStorage.setItem("@token", response.data.accessToken);
      navigate("/home")
    } catch (error) {
      console.log(error)
    }finally {
      setLoading(false)
    }
  };


  return (
    <UserContext.Provider value={{ user, logout , userLogin, userRegister, products}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export { UserContext, UserProvider };