function Input({ label, id, type = 'text', placeholder, ...props }) {
  const campo = (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
      {...props}
    />
  )

  if (!label) {
    return campo
  }

  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-slate-200" htmlFor={id}>
        {label}
      </label>
      {campo}
    </div>
  )
}

export default Input
