import { CheckCircle2, X } from 'lucide-react'

export default function Modal({ open, onClose, title, message }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm px-4 pb-6 sm:pb-4">
      <div className="w-full max-w-sm rounded-2xl bg-[#12151d] border border-white/10 p-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white/70"
          type="button"
          aria-label="Fechar"
        >
          <X size={18} />
        </button>
        <div className="flex flex-col items-center text-center gap-3 pt-2">
          <CheckCircle2 size={48} className="text-[#F7931A]" />
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm text-white/50">{message}</p>
          <button
            onClick={onClose}
            className="mt-3 w-full rounded-xl bg-[#F7931A] text-black font-semibold py-3 text-sm hover:bg-[#e08414] transition-colors"
            type="button"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}
