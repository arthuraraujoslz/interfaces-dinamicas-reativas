function Header({ titulo, subtitulo }) {
  return (
    <header className="cabecalho">
      <div className="container">
        <p className="eyebrow">Introdução ao React</p>
        <h1>{titulo}</h1>
        <p className="subtitulo">{subtitulo}</p>
      </div>
    </header>
  )
}

export default Header
