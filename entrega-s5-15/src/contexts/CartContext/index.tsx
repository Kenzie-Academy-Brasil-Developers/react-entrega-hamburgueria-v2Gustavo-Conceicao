import { useState } from "react";
import { createContext } from "react";
import { iProductsSelected } from "../../pages/Home/@types";
import { api } from "../../services/api";
import { iChildren } from "../UserContext/@types";
import { iProduct } from "./@types";

type iContextProductsProps = {
    products: iProduct[]
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    showModal: boolean
    showModalEmpty: boolean
    setShowModalEmpty: React.Dispatch<React.SetStateAction<boolean>>
    productsResponse: () => void
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
    productsSelected: iProductsSelected[]
    setProductsSelected: React.Dispatch<React.SetStateAction<iProductsSelected[]>>
    addProductCart: (product:iProduct) => void
    // increaseProduct: (productName: string) => void
    // decreaseProduct: (productName: string) => void
}

export const ProductContext = createContext<iContextProductsProps>({} as iContextProductsProps)

export const ProductProvider = ({children}:iChildren) => {
    const [products, setProducts] = useState<iProduct[]>([] as iProduct[])
    const [showModal, setShowModal] = useState(false)
    const [ showModalEmpty, setShowModalEmpty] = useState(false)
    const [loading , setLoading ] = useState(false)
    const [count, setCount] = useState(0)
    const [ productsSelected, setProductsSelected ] = useState<iProductsSelected[]>([] as iProductsSelected[])

    const productsResponse = async () => {
        try {
            const token = localStorage.getItem("@token")
            setLoading(true)
            const response = await api.get("/products", {
                headers: {Authorization: `Bearer ${token}`}
            })
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const updateCount = (products:iProductsSelected[]) => {
        const sumQtd = products.reduce((acc, product) => acc + product.qtd, 0)
        setCount(sumQtd)
    }

    const addProductCart = (products:iProduct) => {
        const newProductSelected = {
            ...products, 
            qtd: 1
        } as iProductsSelected
        const newProductsSelected = [...productsSelected, newProductSelected]
        setProductsSelected(newProductsSelected)
        updateCount(newProductsSelected)
    }

    // const decreaseProduct = (productName: string) => {
    //     const newProductsSelected = productsSelected.map(product => {
    //       let updatedProduct = product
    //       if (product.name === productName) {
    //         updatedProduct.qtd = product.qtd-1
    //         if (updatedProduct.qtd <= 0) {
    //           return undefined
    //         }
    //         productsSelected.filter(product => product !== undefined)
    //         setProductsSelected(newProductsSelected)
    //         updateCount(newProductsSelected)
    //       }
    //       return updatedProduct
    //     })
    //   }
    
    //   const increaseProduct = (productName: string) => {
    //     const newProductsSelected = productsSelected.map(product => {
    //       let updatedProduct = product
    //       if (product.name === productName) {
    //         updatedProduct.qtd = product.qtd+1
    //       }
    //       return updatedProduct
    //     })
    //     setProductsSelected(newProductsSelected)
    //     updateCount(newProductsSelected)
    //   }



    return (
        <ProductContext.Provider value={{products, 
        setShowModal, 
        showModal, 
        showModalEmpty, 
        setShowModalEmpty, 
        productsResponse, 
        count, 
        setCount, 
        productsSelected,
        setProductsSelected,
        addProductCart}}>
            {children}
        </ProductContext.Provider>
    )
}
