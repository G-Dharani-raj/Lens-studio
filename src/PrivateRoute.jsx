import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UseAuth from './CustomHook/UseAuth'

const PrivateRoute = ({ children }) => {
    const isAuth = JSON.parse(localStorage.getItem('isAuth')) || false
    const navigate = useNavigate()
    const { currentUser, userDetails } = UseAuth();
    useEffect(() => {
        if (!isAuth) return navigate('/')
        
   }, [isAuth])

   return children;

}
export default PrivateRoute