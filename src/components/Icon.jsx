// Ícone do BllueWallet: imagem fornecida pelo usuário, recortada sem
// as bordas brancas e com cantos arredondados via clip do container.
export default function Icon({ size = 96, className = '' }) {
  return (
    <img
      src="/icon.png"
      width={size}
      height={size}
      alt="BllueWallet"
      className={`rounded-[22%] object-cover aspect-square ${className}`}
    />
  )
}
