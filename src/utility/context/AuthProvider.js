import React, { createContext, useContext } from 'react'
import { Authenticator } from '@aws-amplify/ui-react'

const AuthContext = createContext()

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <AuthContext.Provider value={{ signOut, user }}>
          {children}
        </AuthContext.Provider>
      )}
    </Authenticator>
  )
}

export { AuthProvider, useAuth }