import { Wallet } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
      <div className="p-6 bg-slate-800 rounded-lg shadow-xl flex flex-col items-center gap-4">
        <Wallet size={48} className="text-green-400" />
        <h1 className="text-3xl font-bold">FinanSee</h1>
        <p className="text-slate-400">Ambiente configurado com sucesso!</p>
        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded font-semibold transition-colors">
          Começar Projeto
        </button>
      </div>
    </div>
  )
}

export default App