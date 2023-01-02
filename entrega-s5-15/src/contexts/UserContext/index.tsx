import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iLoginFormValues } from "../../pages/LoginPage/@types";
import { iRegisterFormValues } from "../../pages/RegisterPage/@types";
import { api } from "../../services/api";
import { iChildren, iUser, iUserLogin, iUserRegister } from "./@types";

type userContextProps = {
  userRegister: (formData: iRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void
  userLogin: (formData: iLoginFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void
  user: iUser | null
  logout: () => void
}


const UserContext = createContext<userContextProps>({} as userContextProps);

const UserProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState<iUser | null>(null);
  const navigate = useNavigate()

  useEffect(() => {
    async function autoLogin() {
      const getToken = localStorage.getItem("@token");
        if(getToken){
          try {
            const response = await api.get("/login", {
              headers: {
                Authorization : `Bearer ${getToken}`
              }   
            });
            setUser(response.data);
          } catch (error) {
            console.log(error);
            localStorage.removeItem("@token");
            localStorage.removeItem("@UserId");
            navigate("/");
          }
      } else {
        navigate("/");
      }
    };
    autoLogin();
  }, []);

  const logout = () => {
    setUser(null);
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
    <UserContext.Provider value={{ user, logout , userLogin, userRegister}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export { UserContext, UserProvider };