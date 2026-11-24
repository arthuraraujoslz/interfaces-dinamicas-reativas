import Badge from './Badge.jsx'

function Card({ titulo, descricao, categoria, children }) {
  return (
    <article className="rounded-xl border border-slate-700 bg-slate-800 p-5 shadow-lg shadow-slate-950/20">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-white">{titulo}</h3>
        {categoria && <Badge variant="default">{categoria}</Badge>}
      </div>
      <p className="text-sm leading-6 text-slate-300">{descricao}</p>
      {children && <div className="mt-5">{children}</div>}
    </article>
  )
}

export default Card
