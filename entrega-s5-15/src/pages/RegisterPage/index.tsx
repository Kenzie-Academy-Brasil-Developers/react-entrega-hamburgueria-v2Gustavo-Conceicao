import React from "react";
import { FormStyled } from "../../components/Form";
import { Main } from "../../components/Main";
import { SectionStyled } from "../../components/SectionNotForm";
import { InputStyled } from "../../components/Input/inputStyled";
import "../../style.css";
import { SectionForm } from "../../components/SectionForm";
import { DivPrimary } from "../../components/DivPrimary";

const RegisterPage = () => {
  return (
    <div>
      <Main>
        <SectionStyled>
          <DivPrimary>
            <img src="/Mask Group.svg" alt="iconLogo" />
            <div>
              <figure>
                <img src="/shopping-bag.svg" alt="Icon Shopping Cart" />
              </figure>
              <p>
                A vida é como um sanduíche, é preciso recheá-la com os <span>melhores </span>
                ingredientes.
              </p>
            </div>
            <figure className="figureDot">
              <img src="/Group 135.png" alt="iconDot" />
            </figure>
          </DivPrimary>
        </SectionStyled>
        <SectionForm>
          <FormStyled>
            <div>
              <h2>Cadastro</h2>
              <span>Retornar para o login</span>
            </div>
            <InputStyled>
              <label htmlFor="">Nome</label>
              <input type="text" placeholder="Digite aqui seu nome" />
            </InputStyled>
            <InputStyled>
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Digite aqui seu email" />
            </InputStyled>
            <InputStyled>
              <input type="password" placeholder="Digite uma senha" />
            </InputStyled>
            <InputStyled>
              <input type="password" placeholder="Confirmar Senha" />
            </InputStyled>
            <button>Cadastrar</button>
          </FormStyled>
        </SectionForm>
      </Main>
    </div>
  );
}

export default RegisterPage;
