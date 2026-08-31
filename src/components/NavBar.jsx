import { Home, ArrowUpCircle, ArrowDownCircle } from 'lucide-react'

const TABS = [
  { id: 'home', label: 'Início', Icon: Home },
  { id: 'saque', label: 'Saque', Icon: ArrowUpCircle },
  { id: 'deposito', label: 'Depósito', Icon: ArrowDownCircle },
]

export default function NavBar({ current, onChange }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0B0E14]/95 backdrop-blur border-t border-white/10 flex justify-around py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
      {TABS.map(({ id, label, Icon }) => {
        const active = current === id
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={`flex flex-col items-center gap-1 px-4 py-1.5 rounded-lg transition-colors ${
              active ? 'text-[#3D76D8]' : 'text-white/40'
            }`}
          >
            <Icon size={22} strokeWidth={active ? 2.4 : 2} />
            <span className="text-[11px] font-medium">{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
