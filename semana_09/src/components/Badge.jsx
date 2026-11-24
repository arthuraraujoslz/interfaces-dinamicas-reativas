const estilosPorVariante = {
  default: 'bg-slate-700 text-slate-100',
  success: 'bg-emerald-500/15 text-emerald-300 ring-1 ring-inset ring-emerald-500/30',
  warning: 'bg-amber-500/15 text-amber-300 ring-1 ring-inset ring-amber-500/30',
  danger: 'bg-rose-500/15 text-rose-300 ring-1 ring-inset ring-rose-500/30',
}

function Badge({ children, variant = 'default' }) {
  const estiloVariante = estilosPorVariante[variant] ?? estilosPorVariante.default

  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${estiloVariante}`}>
      {children}
    </span>
  )
}

export default Badge
