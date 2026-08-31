import { useEffect, useState } from 'react'
import { WalletProvider, useWallet } from './context/WalletContext'
import useBtcPrice from './hooks/useBtcPrice'
import Splash from './components/Splash'
import Login from './components/Login'
import Home from './components/Home'
import Saque from './components/Saque'
import Deposito from './components/Deposito'
import NavBar from './components/NavBar'

function AppShell() {
  const { isAuthenticated } = useWallet()
  const [tab, setTab] = useState('home')
  const { price, error } = useBtcPrice()

  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white flex flex-col">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {tab === 'home' && <Home price={price} priceError={error} />}
        {tab === 'saque' && <Saque />}
        {tab === 'deposito' && <Deposito />}
      </div>
      <NavBar current={tab} onChange={setTab} />
    </div>
  )
}

export default function App() {
  const [booting, setBooting] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 900)
    return () => clearTimeout(timer)
  }, [])

  if (booting) {
    return <Splash />
  }

  return (
    <WalletProvider>
      <AppShell />
    </WalletProvider>
  )
}
