import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard indisponível neste navegador — ignora silenciosamente
    }
  }

  return (
    <div className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-3">
      <div className="min-w-0">
        <p className="text-[11px] text-white/40 uppercase tracking-wide">{label}</p>
        <p className="text-sm font-medium truncate">{value}</p>
      </div>
      <button
        onClick={handleCopy}
        className="flex items-center gap-1 text-xs font-medium text-[#3D76D8] shrink-0 ml-3"
        type="button"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? 'Copiado' : 'Copiar'}
      </button>
    </div>
  )
}
