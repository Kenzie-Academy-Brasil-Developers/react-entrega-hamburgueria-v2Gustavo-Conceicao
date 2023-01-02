import React, { useContext, useState } from "react";
import { FormStyled } from "../../components/Form";
import { Main } from "../../components/Main";
import { SectionStyled } from "../../components/SectionNotForm";
import { SectionForm } from "../../components/SectionForm";
import { DivPrimary } from "../../components/DivPrimary";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/UserContext";
import { RegisterSchema } from "./registerSchema";
import InputForm from "../../components/Input";
import { LinkToLogin } from "../../components/LinkLogin";
import { iRegisterFormValues } from "./@types";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormValues>({
    resolver: yupResolver(RegisterSchema),
  });

  const submit = (data: iRegisterFormValues) => {
    userRegister(data, setLoading);
  };

  return (
    <>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <Main>
          <SectionStyled>
            <DivPrimary>
              <img src="/Mask Group.svg" alt="iconLogo" />
              <div>
                <figure>
                  <img src="/shopping-bag.svg" alt="Icon Shopping Cart" />
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
          <SectionForm>
            <FormStyled noValidate onSubmit={handleSubmit(submit)}>
              <div>
                <h2>Cadastro</h2>
                <LinkToLogin to="/">Retornar para o login</LinkToLogin>
              </div>
              <InputForm
                id="name"
                type="text"
                key="name"
                label="Nome"
                placeholder="Digite seu nome"
                register={register("name")}
                disabled={loading}
              />
              <InputForm
                id="email"
                type="email"
                key="email"
                label="Email"
                placeholder="Digite seu email aqui"
                register={register("email")}
                disabled={loading}
                error={errors && "Esse email já existe !"}
              />
              <InputForm
                id="password"
                type="password"
                key="password"
                label="Senha"
                placeholder="Digite sua senha aqui"
                register={register("password")}
                disabled={loading}
                error={errors ? "Digite uma senha melhor" : ""}
              />
              <InputForm
                id="confirmPassword"
                type="password"
                key="confirmPassword"
                label="Confirme sua senha"
                placeholder="Confirme sua senha"
                disabled={loading}
                error={errors ? "Digite uma senha melhor" : ""}
              />
              <button type="submit" disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastrar"}
              </button>
            </FormStyled>
          </SectionForm>
        </Main>
      )}
      ;
    </>
  );
};

export default RegisterPage;
