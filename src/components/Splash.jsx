import Icon from './Icon'

export default function Splash() {
  return (
    <div className="min-h-screen bg-[#0B0E14] flex flex-col items-center justify-center gap-4 text-white">
      <Icon size={80} />
      <p className="font-semibold tracking-tight">BllueWallet</p>
      <div className="w-6 h-6 border-2 border-white/20 border-t-[#3D76D8] rounded-full animate-spin" />
    </div>
  )
}
