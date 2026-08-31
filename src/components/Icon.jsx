// Ícone original do BllueWallet: fundo azul-marinho quase preto,
// símbolo de Bitcoin (₿) laranja dentro de um círculo outline.
export default function Icon({ size = 96, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="BllueWallet"
    >
      <rect width="120" height="120" rx="28" fill="#0B0E14" />
      <circle cx="60" cy="60" r="32" fill="none" stroke="#F7931A" strokeWidth="4" />
      <text
        x="60"
        y="63"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="46"
        fill="#F7931A"
      >
        ₿
      </text>
    </svg>
  )
}
