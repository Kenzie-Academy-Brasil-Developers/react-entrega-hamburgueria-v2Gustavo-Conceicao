// import { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../contexts/CartContext";
import { ButtonModal } from "../ButtonModal";
import "./styles.css";

const CartModal = () => {
  const { showModal, setShowModal, count, setCount, productsSelected, setProductsSelected } =
    useContext(ProductContext);

  const removeAll = () => {
    setProductsSelected([])
    setCount(0)
    setShowModal(false)
  }

  const removeCart = (productId:number) => {
    const newList = productsSelected.filter((product) => product.id !== productId);
    setProductsSelected(newList);
  }; 

  return (
    <section
      className="sectionModal"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="bodyContainer">
        <div className="headerModal">
          <h3>Carrinho de compras</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <div className="mainModal">
          <ul className="listModal">
            {productsSelected.map((productSelected) => (
              <li className="productModal">
                <div>
                  <figure>
                    <img
                      className="imgProduct"
                      src={productSelected.img}
                      alt="iconProduct"
                    />
                  </figure>
                  <div className="divProduct">
                    <h2>{productSelected.name}</h2>
                    <div>
                      <span onClick={() => setCount((count) => count - 1)}>
                        -
                      </span>
                      <p>{count}</p>
                      <span onClick={() => setCount((count) => count + 1)}>
                        +
                      </span>
                    </div>
                  </div>
                </div>
                <img src="/.png" alt="icon Trash" onClick={() => removeCart(productSelected.id)}/>
              </li>
            ))}
          </ul>
          <div className="total">
            <p>Total</p>
            <span>{`R$ ${productsSelected.reduce(
              (totalValue, valueItem) => totalValue + Number(valueItem.price),
              0
            )}`}</span>
          </div>
          <ButtonModal onClick={() => removeAll()}>Remover todos</ButtonModal>
        </div>
      </div>
    </section>
  );
};

export default CartModal;
