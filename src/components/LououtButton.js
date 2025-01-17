import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const LououtButton = () => {
    const { logout , isAuthenticated} = useAuth0()

  return (
    isAuthenticated && (
        <button onClick={ () => logout() }>
            Logout
        </button>
    )
  )
}
