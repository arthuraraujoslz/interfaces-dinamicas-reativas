const estilosPorVariante = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-400',
  secondary: 'bg-slate-700 text-slate-100 hover:bg-slate-600 focus-visible:outline-slate-400',
  danger: 'bg-rose-600 text-white hover:bg-rose-500 focus-visible:outline-rose-400',
}

function Button({ children, variant = 'primary', type = 'button', onClick, ...props }) {
  const estiloVariante = estilosPorVariante[variant] ?? estilosPorVariante.primary

  return (
    <button
      className={`rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${estiloVariante}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
