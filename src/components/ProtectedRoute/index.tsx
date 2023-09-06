import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isAuthenticated } from 'routes/Auth/Middlewares/auth'

export const ProtectedRoute: FC<{ element: React.ReactNode }> = ({ element }) => {
  const navigate = useNavigate()
  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await isAuthenticated()
      if (isAuth === false) {
        navigate('/login', { replace: true })
      }
    }
    checkAuth()
  }, [])
  return <>{element}</>
}
