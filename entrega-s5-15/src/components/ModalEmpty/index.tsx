import { useContext } from "react";
import { ProductContext } from "../../contexts/CartContext";
import "./styles.css"

const EmptyModal = () => {
  const { showModalEmpty, setShowModalEmpty } = useContext(ProductContext)

  return (
    <section className="sectionModal" style={{display: showModalEmpty ? "block" : "none"}}>
      <div className="bodyContainer">
        <div className="headerModal">
          <h3>Carrinho de compras</h3>
          <button onClick={() => setShowModalEmpty(false)}>X</button>
        </div>
        <div className="mainModalEmpty">
            <span>Sua sacola está vazia</span>
            <span>Adicione itens</span>
        </div>
      </div>
    </section>
  );
};

export default EmptyModal;
