import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <span className="text-2xl">💰</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              FinançasFáceis
            </span>
          </div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                Entrar
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/30">
                Começar Grátis
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-sm font-medium">
                100% gratuito e seguro
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Controle suas finanças
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-amber-400 bg-clip-text text-transparent">
                com inteligência
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
              Organize suas despesas, acompanhe seus investimentos e alcance
              seus objetivos financeiros de forma simples e eficiente.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/register">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all"
                >
                  Começar Agora
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Já tenho conta
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  100%
                </div>
                <div className="text-sm text-slate-400">Gratuito</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  🔒
                </div>
                <div className="text-sm text-slate-400">Seguro</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  ⚡
                </div>
                <div className="text-sm text-slate-400">Rápido</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Recursos que{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                fazem a diferença
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Tudo que você precisa para gerenciar suas finanças em um só lugar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="group p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all hover:shadow-xl hover:shadow-emerald-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Dashboards Inteligentes
              </h3>
              <p className="text-slate-400">
                Visualize todas suas finanças com gráficos modernos e insights
                em tempo real.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/30">
                <span className="text-3xl">💳</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Controle de Gastos
              </h3>
              <p className="text-slate-400">
                Categorize e acompanhe todas suas despesas e receitas
                automaticamente.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Metas Financeiras
              </h3>
              <p className="text-slate-400">
                Defina objetivos e acompanhe seu progresso rumo à independência
                financeira.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Transforme sua relação com o{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                  dinheiro
                </span>
              </h2>
              <p className="text-xl text-slate-400">
                Com o FinançasFáceis, você tem controle total sobre suas
                finanças pessoais de forma simples e intuitiva.
              </p>
              <ul className="space-y-4">
                {[
                  "Interface moderna e fácil de usar",
                  "Visualização clara de receitas e despesas",
                  "Gráficos e relatórios detalhados",
                  "Segurança e privacidade garantidas",
                  "Acesso de qualquer dispositivo",
                ].map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/30"
                  >
                    Comece Gratuitamente
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700 p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-xl border border-emerald-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <span className="text-xl">💰</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Receitas</div>
                        <div className="text-emerald-400 text-sm">
                          Março 2026
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-emerald-400">
                      R$ 5.420
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-xl border border-red-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                        <span className="text-xl">📤</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Despesas</div>
                        <div className="text-red-400 text-sm">Março 2026</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-red-400">
                      R$ 2.880
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-xl border border-amber-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                        <span className="text-xl">📈</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Saldo</div>
                        <div className="text-amber-400 text-sm">Disponível</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-amber-400">
                      R$ 2.540
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Pronto para começar?
              </h2>
              <p className="text-xl text-emerald-100">
                Crie sua conta gratuitamente e assuma o controle das suas
                finanças hoje mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-white text-emerald-600 hover:bg-slate-100 shadow-xl"
                  >
                    Criar Conta Grátis
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="container mx-auto text-center text-slate-400">
          <p>© 2026 FinançasFáceis. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
