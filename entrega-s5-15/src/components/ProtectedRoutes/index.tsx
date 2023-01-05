import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

const ProtectedRoutes = (outlet:any) => {
  const { products } = useContext(UserContext)

  return (
    products.length ? <Outlet/> : <Navigate to="/"/>
  )
}

export default ProtectedRoutes