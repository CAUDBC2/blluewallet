import { createContext, useContext, useState } from 'react'

const WalletContext = createContext(null)

const DEMO_USER = 'demo'
const DEMO_PASS = '123456'
const INITIAL_BALANCE = 0.8776

export function WalletProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [btcBalance, setBtcBalance] = useState(INITIAL_BALANCE)

  function login(username, password) {
    if (username === DEMO_USER && password === DEMO_PASS) {
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  function logout() {
    setIsAuthenticated(false)
  }

  function depositBtc(amount) {
    setBtcBalance((prev) => prev + amount)
  }

  const value = { isAuthenticated, login, logout, btcBalance, depositBtc }

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
}

export function useWallet() {
  const ctx = useContext(WalletContext)
  if (!ctx) throw new Error('useWallet deve ser usado dentro de WalletProvider')
  return ctx
}
