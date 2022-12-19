import React from "react";
import { FormStyled } from "../../components/Form";
import { Main } from "../../components/Main";
import { SectionStyled } from "../../components/SectionNotForm";
import { InputStyled } from "../../components/Input/inputStyled";
import "../../style.css";
import { SectionForm } from "../../components/SectionForm";
import { DivPrimary } from "../../components/DivPrimary";

const LoginPage = () => {
  return (
    <div>
      <Main>
        <SectionForm>
          <FormStyled>
            <div>
              <h2>Login</h2>
            </div>
            <InputStyled>
              <label htmlFor="">Nome</label>
              <input type="text" placeholder="Digite aqui seu nome" />
            </InputStyled>
            <InputStyled>
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Digite aqui seu email" />
            </InputStyled>
            <button>Cadastrar</button>
            <span>
              Crie sua conta para saborear muitas delícias e matar sua fome!
            </span>
            <button>Logar</button>
          </FormStyled>
        </SectionForm>
        <SectionStyled>
          <DivPrimary>
            <img src="/Mask Group.svg" alt="iconLogo" />
            <div>
              <figure>
                <img src="/shopping-bag.svg" alt="Icon Shop Cart" />
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
    </div>
  );
};

export default LoginPage;
