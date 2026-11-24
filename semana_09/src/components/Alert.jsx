const estilosPorVariante = {
  success: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-100',
  error: 'border-rose-500/40 bg-rose-500/10 text-rose-100',
  warning: 'border-amber-500/40 bg-amber-500/10 text-amber-100',
}

function Alert({ variant = 'success', title, message }) {
  const estiloVariante = estilosPorVariante[variant] ?? estilosPorVariante.success

  return (
    <section className={`rounded-lg border p-4 ${estiloVariante}`} role="alert">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm opacity-90">{message}</p>
    </section>
  )
}

export default Alert
