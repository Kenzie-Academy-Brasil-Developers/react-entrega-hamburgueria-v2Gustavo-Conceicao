import { useContext, useState } from "react";
import { FormStyled } from "../../components/Form";
import { Main } from "../../components/Main";
import { SectionStyled } from "../../components/SectionNotForm";
import "../../style.css";
import { SectionForm } from "../../components/SectionForm";
import { DivPrimary } from "../../components/DivPrimary";
import { useForm } from "react-hook-form";
import { iLoginFormValues } from "./@types";
import { UserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./loginSchema";
import InputForm from "../../components/Input";
import { LinkToRegister } from "../../components/LinkRegister";
import { TitleForm } from "../../components/TitleForm";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormValues>({
    resolver: yupResolver(LoginSchema),
  });

  const submit = (data:iLoginFormValues) => {
    userLogin(data, setLoading)
  }

  return (
    <div>
      {loading ? (
        <div>Carregando...</div>
      ):(
        <Main>
          <SectionForm>
            <FormStyled noValidate onSubmit={handleSubmit(submit, (errors) => {console.log(errors)})}>
              <TitleForm>
                <h2>Login</h2>
              </TitleForm>
              <InputForm
                type="email"
                id="email"
                label="Email"
                placeholder="Digite aqui seu email"
                disabled={loading}
                register={register("email")}
                error={errors?.email ? "*Email incorreto !" : ""}
              />
              <InputForm
                type="password"
                id="password"
                label="Senha"
                placeholder="Digite sua senha aqui"
                disabled={loading}
                register={register("password")}
                error={errors?.password ? "*Senha incorreta !" : ""}
              />
              <button type="submit" disabled={loading}>
                {loading ? "Entrando" : "Entrar"}
              </button>
              <span>
                Crie sua conta para saborear muitas delícias e matar sua fome!
              </span>
              <LinkToRegister to="/register">Cadastrar</LinkToRegister>
            </FormStyled>
          </SectionForm>
          <SectionStyled>
            <DivPrimary>
              <img src="/Mask Group.svg" alt="iconLogo" />
              <div>
                <figure className="figureShop">
                  <img
                    className="shop"
                    src="/shopping-bag.svg"
                    alt="Icon Shop Cart"
                  />
                </figure>
                <p>
                  A vida é como um sanduíche, é preciso recheá-la com os{" "}
                  <span>melhores </span>
                  ingredientes.
                </p>
              </div>
              <figure className="figureDot">
                <img src="/Group 135.png" alt="iconDot" />
              </figure>
            </DivPrimary>
          </SectionStyled>
        </Main>
      )}
    </div>
  );
};

export default LoginPage;
