import { RefreshCw } from 'lucide-react'
import { useWallet } from '../context/WalletContext'
import Icon from './Icon'

function formatUsd(value) {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

export default function Home({ price, priceError }) {
  const { btcBalance } = useWallet()
  const usdValue = price ? btcBalance * price : null

  return (
    <div className="px-5 pt-6 flex flex-col gap-6">
      <header className="flex items-center gap-2">
        <Icon size={32} />
        <span className="font-semibold tracking-tight">BllueWallet</span>
      </header>

      <div className="text-center">
        <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Cotação BTC/USD</p>
        {priceError ? (
          <p className="text-sm text-red-400">Não foi possível carregar a cotação</p>
        ) : price ? (
          <p className="text-3xl font-bold">{formatUsd(price)}</p>
        ) : (
          <p className="text-sm text-white/40 flex items-center justify-center gap-2">
            <RefreshCw size={14} className="animate-spin" /> Carregando...
          </p>
        )}
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-[#161B26] to-[#0F1420] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] p-6">
        <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Saldo disponível</p>
        <p className="text-4xl font-extrabold text-[#3D76D8] tracking-tight">
          {btcBalance.toFixed(4)} <span className="text-lg font-semibold">BTC</span>
        </p>
        <p className="text-white/50 text-sm mt-2">
          {usdValue !== null ? `≈ ${formatUsd(usdValue)}` : 'Calculando...'}
        </p>
      </div>
    </div>
  )
}
