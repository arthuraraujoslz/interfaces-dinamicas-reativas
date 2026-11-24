import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Lista from './components/Lista.jsx'

const cards = [
  { titulo: 'Componentes', descricao: 'Blocos reutilizáveis tornam a interface organizada.', categoria: 'Fundamentos' },
  { titulo: 'Props', descricao: 'Dados passam de componentes pai para componentes filhos.', categoria: 'Comunicação' },
  { titulo: 'Listas', descricao: 'Arrays são transformados em elementos com map e key única.', categoria: 'Renderização' },
]

const itensDeEstudo = [
  'Criar componentes reutilizáveis',
  'Enviar dados por props',
  'Renderizar listas com map',
]

function App() {
  return (
    <>
      <Header titulo="React: componentes com propósito" subtitulo="Semana 08 — uma interface simples, orientada a dados e sem repetição." />
      <main className="container">
        <section aria-labelledby="titulo-cards">
          <p className="eyebrow">Conteúdo da semana</p>
          <h2 id="titulo-cards">Conceitos essenciais</h2>
          <div className="grid-cards">
            {cards.map(({ titulo, descricao, categoria }) => (
              <Card key={titulo} titulo={titulo} descricao={descricao} categoria={categoria} />
            ))}
          </div>
        </section>
        <section className="secao-lista" aria-labelledby="titulo-lista">
          <p className="eyebrow">Tarefa de casa</p>
          <h2 id="titulo-lista">Checklist de prática</h2>
          <Lista itens={itensDeEstudo} />
        </section>
      </main>
      <Footer texto="Desenvolvido para o Entregável de React — Semana 08." />
    </>
  )
}

export default App
