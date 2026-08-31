import { useState } from 'react'
import Modal from './Modal'
import { useWallet } from '../context/WalletContext'

export default function Deposito() {
  const { depositBtc } = useWallet()
  const [amount, setAmount] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [lastAmount, setLastAmount] = useState(0)

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!amount || Number(amount) <= 0) {
      setError('Informe um valor válido em BTC.')
      return
    }
    if (!password) {
      setError('Informe a senha para confirmar a operação.')
      return
    }

    depositBtc(Number(amount))
    setLastAmount(Number(amount))
    setSuccess(true)
  }

  function handleCloseModal() {
    setSuccess(false)
    setAmount('')
    setPassword('')
  }

  return (
    <div className="px-5 pt-6 pb-6 flex flex-col gap-6">
      <h1 className="text-xl font-bold">Depósito</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="text-xs text-white/50 mb-1 block">Valor a depositar (BTC)</label>
          <input
            type="number"
            min="0"
            step="0.0001"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.0000"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#3D76D8] transition-colors"
          />
        </div>

        <div>
          <label className="text-xs text-white/50 mb-1 block">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#3D76D8] transition-colors"
          />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          className="mt-2 rounded-xl bg-[#3D76D8] text-white font-semibold py-3 text-sm hover:bg-[#2C56A0] transition-colors"
        >
          Confirmar depósito
        </button>
      </form>

      <Modal
        open={success}
        onClose={handleCloseModal}
        title="Depósito confirmado"
        message={`${lastAmount.toFixed(4)} BTC foram adicionados à sua carteira.`}
      />
    </div>
  )
}
