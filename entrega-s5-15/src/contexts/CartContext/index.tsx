import { useState } from "react";
import { createContext } from "react";
import { iProductsSelected } from "../../pages/Home/@types";
import { iChildren } from "../UserContext/@types";
import { iProduct } from "./@types";

type iContextProductsProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  showModalEmpty: boolean;
  setShowModalEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  productsSelected: iProductsSelected[];
  setProductsSelected: React.Dispatch<
    React.SetStateAction<iProductsSelected[]>
  >;
  addProductCart: (product: iProduct) => void;
};

export const ProductContext = createContext<iContextProductsProps>(
  {} as iContextProductsProps
);

export const ProductProvider = ({ children }: iChildren) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalEmpty, setShowModalEmpty] = useState(false);
  const [count, setCount] = useState(0);
  const [productsSelected, setProductsSelected] = useState<iProductsSelected[]>(
    [] as iProductsSelected[]
  );

  const updateCount = (products: iProductsSelected[]) => {
    const sumQtd = products.reduce((acc, product) => acc + product.qtd, 0);
    setCount(sumQtd);
  };

  const addProductCart = (products: iProduct) => {
    const newProductSelected = {
      ...products,
      qtd: 1,
    } as iProductsSelected;
    const newProductsSelected = [...productsSelected, newProductSelected];
    setProductsSelected(newProductsSelected);
    updateCount(newProductsSelected);
  };

  return (
    <ProductContext.Provider
      value={{
        setShowModal,
        showModal,
        showModalEmpty,
        setShowModalEmpty,
        count,
        setCount,
        productsSelected,
        setProductsSelected,
        addProductCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
