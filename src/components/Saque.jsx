import { useState } from 'react'
import CopyField from './CopyField'
import Modal from './Modal'

const BANK_ACCOUNT = {
  titular: 'Carla De Brandao Coutinho',
  numeroConta: '115702804304',
  banco: 'BTG Bank Global',
  routing: '103913434',
}

export default function Saque() {
  const [unit, setUnit] = useState('USD')
  const [amount, setAmount] = useState('')
  const [confirmationKey, setConfirmationKey] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!amount || Number(amount) <= 0) {
      setError('Informe um valor válido para o saque.')
      return
    }

    const digitsOnly = confirmationKey.replace(/\s/g, '')
    if (!/^\d{24}$/.test(digitsOnly)) {
      setError('A chave de confirmação deve ter exatamente 24 dígitos.')
      return
    }

    setSuccess(true)
  }

  function handleCloseModal() {
    setSuccess(false)
    setAmount('')
    setConfirmationKey('')
  }

  return (
    <div className="px-5 pt-6 pb-6 flex flex-col gap-6">
      <h1 className="text-xl font-bold">Saque</h1>

      <section className="flex flex-col gap-3">
        <p className="text-xs text-white/40 uppercase tracking-wide">Conta de destino</p>
        <CopyField label="Titular" value={BANK_ACCOUNT.titular} />
        <CopyField label="Número da conta" value={BANK_ACCOUNT.numeroConta} />
        <CopyField label="Banco beneficiário" value={BANK_ACCOUNT.banco} />
        <CopyField label="ACH / ABA / Wire Routing Number" value={BANK_ACCOUNT.routing} />
      </section>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-xs text-white/50">Valor do saque</label>
            <div className="flex rounded-lg bg-white/5 border border-white/10 overflow-hidden">
              {['USD', 'BTC'].map((u) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => setUnit(u)}
                  className={`px-3 py-1 text-xs font-medium transition-colors ${
                    unit === u ? 'bg-[#F7931A] text-black' : 'text-white/50'
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>
          <input
            type="number"
            min="0"
            step={unit === 'USD' ? '0.01' : '0.0001'}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder={unit === 'USD' ? '0.00' : '0.0000'}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#F7931A] transition-colors"
          />
        </div>

        <div>
          <label className="text-xs text-white/50 mb-1 block">Chave de confirmação (24 dígitos)</label>
          <input
            type="text"
            inputMode="numeric"
            value={confirmationKey}
            onChange={(e) => setConfirmationKey(e.target.value)}
            placeholder="000000000000000000000000"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#F7931A] transition-colors font-mono"
          />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          className="mt-2 rounded-xl bg-[#F7931A] text-black font-semibold py-3 text-sm hover:bg-[#e08414] transition-colors"
        >
          Confirmar saque
        </button>
      </form>

      <Modal
        open={success}
        onClose={handleCloseModal}
        title="Saque confirmado"
        message={`Seu saque de ${amount || '0'} ${unit} foi simulado com sucesso. Nenhuma transação real foi processada.`}
      />
    </div>
  )
}
