import Alert from './components/Alert.jsx'
import Badge from './components/Badge.jsx'
import Button from './components/Button.jsx'
import Card from './components/Card.jsx'
import Input from './components/Input.jsx'

const alertas = [
  { variant: 'success', title: 'Alterações salvas', message: 'Os dados foram atualizados com sucesso.' },
  { variant: 'error', title: 'Não foi possível continuar', message: 'Revise os campos obrigatórios e tente novamente.' },
  { variant: 'warning', title: 'Atenção', message: 'Esta ação pode exigir uma revisão posterior.' },
]

const botoes = [
  { variant: 'primary', rotulo: 'Primário' },
  { variant: 'secondary', rotulo: 'Secundário' },
  { variant: 'danger', rotulo: 'Perigo' },
]

const badges = [
  { variant: 'default', rotulo: 'Padrão' },
  { variant: 'success', rotulo: 'Concluído' },
  { variant: 'warning', rotulo: 'Pendente' },
  { variant: 'danger', rotulo: 'Bloqueado' },
]

const campos = [
  { id: 'nome', label: 'Nome completo', placeholder: 'Digite seu nome' },
  { id: 'email', label: 'E-mail', type: 'email', placeholder: 'voce@exemplo.com' },
]

const cards = [
  { titulo: 'Composição', descricao: 'Pequenos componentes combináveis criam interfaces consistentes.', categoria: 'Estrutura' },
  { titulo: 'Variantes', descricao: 'Dicionários de estilos tornam novas opções simples de manter.', categoria: 'DRY' },
  { titulo: 'Utilitários', descricao: 'Classes Tailwind deixam o estilo próximo do componente.', categoria: 'Tailwind' },
]

function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Semana 09</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Design System com React e Tailwind</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">Uma vitrine orientada a dados para componentes consistentes, reutilizáveis e fáceis de escalar.</p>
        </header>

        <section className="space-y-4" aria-labelledby="titulo-alertas">
          <h2 id="titulo-alertas" className="text-2xl font-bold text-white">Alerts</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {alertas.map(({ variant, title, message }) => <Alert key={variant} variant={variant} title={title} message={message} />)}
          </div>
        </section>

        <section className="space-y-4" aria-labelledby="titulo-acoes">
          <h2 id="titulo-acoes" className="text-2xl font-bold text-white">Ações e estados</h2>
          <div className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-5">
            {botoes.map(({ variant, rotulo }) => <Button key={variant} variant={variant} onClick={() => console.log(`Botão ${rotulo} acionado.`)}>{rotulo}</Button>)}
            <span className="mx-1 h-8 w-px bg-slate-700" aria-hidden="true" />
            {badges.map(({ variant, rotulo }) => <Badge key={variant} variant={variant}>{rotulo}</Badge>)}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]" aria-labelledby="titulo-formulario">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 id="titulo-formulario" className="text-2xl font-bold text-white">Inputs</h2>
            <div className="mt-5 space-y-4">{campos.map((campo) => <Input key={campo.id} {...campo} />)}</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {cards.map(({ titulo, descricao, categoria }) => (
              <Card key={titulo} titulo={titulo} descricao={descricao} categoria={categoria}>
                <Button variant="secondary">Ver componente</Button>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
