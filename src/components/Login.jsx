import { useState } from 'react'
import Icon from './Icon'
import { useWallet } from '../context/WalletContext'

export default function Login() {
  const { login } = useWallet()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const ok = login(username, password)
    if (!ok) {
      setError('Usuário ou senha inválidos.')
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0E14] flex flex-col items-center justify-center px-6 text-white">
      <div className="flex flex-col items-center mb-10">
        <Icon size={88} className="mb-4" />
        <h1 className="text-2xl font-bold tracking-tight">BllueWallet</h1>
        <p className="text-sm text-white/40 mt-1">Sua carteira Bitcoin</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-4">
        <div>
          <label className="text-xs text-white/50 mb-1 block">Usuário</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="demo"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#F7931A] transition-colors"
            autoComplete="username"
          />
        </div>
        <div>
          <label className="text-xs text-white/50 mb-1 block">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#F7931A] transition-colors"
            autoComplete="current-password"
          />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          className="mt-2 rounded-xl bg-[#F7931A] text-black font-semibold py-3 text-sm hover:bg-[#e08414] transition-colors"
        >
          Entrar
        </button>
      </form>

      <p className="text-xs text-white/30 mt-10 text-center max-w-sm">
        BllueWallet — protótipo acadêmico, dados fictícios, sem integração real com blockchain.
        <br />
        Use usuário <span className="text-white/50">demo</span> e senha{' '}
        <span className="text-white/50">123456</span>.
      </p>
    </div>
  )
}
