function Card({ titulo, descricao, categoria }) {
  return (
    <article className="card">
      <span className="categoria">{categoria}</span>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </article>
  )
}

export default Card
