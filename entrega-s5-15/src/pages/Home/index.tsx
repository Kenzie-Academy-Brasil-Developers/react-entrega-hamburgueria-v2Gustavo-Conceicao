import { useContext, useState } from "react";
import { Container } from "../../components/Container";
import { DivInputHeaderStyled } from "../../components/DivInputHeader";
import { FormHeaderStyled } from "../../components/FormHeader";
import { HeaderStyled } from "../../components/HeaderHome";
import { ListStyled } from "../../components/ListHome";
import CartModal from "../../components/Modal";
import EmptyModal from "../../components/ModalEmpty";
import { ProductsStyled } from "../../components/ProductHome";
import { SectionHomeStyled } from "../../components/SectionHome";
import { ProductContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const { products, logout } = useContext(UserContext);
  const [searchProduct, setSearchProduct] = useState("")
  
  const {
    setShowModal,
    setShowModalEmpty,
    productsSelected,
    addProductCart,
    count,
  } = useContext(ProductContext);

  const openModal = () => {
    if (!productsSelected.length) {
      setShowModalEmpty(true);
      setShowModal(false);
    } else {
      setShowModal(true);
      setShowModalEmpty(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <>
          <HeaderStyled>
            <Container>
              <img className="logo" src="/Mask Group.svg" alt="iconLogo" />
              <DivInputHeaderStyled>
                <FormHeaderStyled>
                  <input type="text" placeholder="Digite sua pesquisa"/>
                  <button>
                    <img src="/button-disable.png" alt="iconSearch" />
                  </button>
                </FormHeaderStyled>
                <div className="iconHeader" onClick={openModal}>
                  <img className="iconHeader" src="/.png" alt="iconCart" onClick={openModal} />
                  <p>{count}</p>
                </div>
                <img
                  className="iconLogout"
                  src="/.png"
                  alt="iconLogout"
                  onClick={() => logout()}
                />
              </DivInputHeaderStyled>
            </Container>
          </HeaderStyled>
          <Container>
            <SectionHomeStyled>
              <ListStyled>
                {products.map((product) => (
                  <ProductsStyled key={product.name}>
                    <figure>
                      <img
                        className="imgProduct"
                        src={product.img}
                        alt="iconProduct"
                      />
                    </figure>
                    <div className="divInfo">
                      <h2>{product.name}</h2>
                      <p>{product.category}</p>
                      <span>R$ {product.price}</span>
                      <button onClick={() => addProductCart(product)}>
                        Adicionar
                      </button>
                    </div>
                  </ProductsStyled>
                ))}
              </ListStyled>
            </SectionHomeStyled>
          </Container>
        </>
      )}
      <EmptyModal />
      <CartModal />
    </div>
  );
};

export default HomePage;
