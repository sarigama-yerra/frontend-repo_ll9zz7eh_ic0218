import { Sparkles, Flame, ShoppingCart, ArrowRight } from 'lucide-react'

export default function HomeDashboard() {
  const cards = [
    {
      title: 'Kalori Hari Ini',
      value: '1.240 kcal',
      sub: 'dari target 1.800',
      glow: 'from-blue-500/30 to-cyan-400/30',
    },
    {
      title: 'Makro',
      value: 'P 80g • K 150g • L 45g',
      sub: 'ringkasan harian',
      glow: 'from-violet-500/30 to-fuchsia-400/30',
    },
    {
      title: 'Rekomendasi',
      value: '3 menu siap coba',
      sub: 'berdasar preferensi',
      glow: 'from-emerald-500/30 to-teal-400/30',
    },
  ]

  const recipes = [
    { name: 'Oatmeal Berry Bowl', kcal: 380 },
    { name: 'Grilled Chicken Salad', kcal: 420 },
    { name: 'Tofu Veggie Stir-fry', kcal: 450 },
  ]

  return (
    <div className="relative z-10 container mx-auto px-6 -mt-8 pb-28">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map((c) => (
          <div key={c.title} className={`rounded-2xl p-4 bg-white/5 border border-white/15 backdrop-blur-xl text-white shadow-xl relative overflow-hidden`}> 
            <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${c.glow} blur-3xl rounded-full`} />
            <p className="text-xs text-blue-100/80 mb-1">{c.title}</p>
            <p className="text-2xl font-semibold">{c.value}</p>
            <p className="text-xs text-blue-200/70 mt-1">{c.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-semibold">Rekomendasi Hari Ini</h3>
          <a href="/planner" className="text-blue-300 text-sm hover:text-blue-200 inline-flex items-center gap-1">Lihat semua <ArrowRight className="w-4 h-4"/></a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {recipes.map((r) => (
            <div key={r.name} className="rounded-2xl p-4 bg-white/5 border border-white/15 backdrop-blur-xl text-white">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">{r.name}</p>
                  <p className="text-xs text-blue-200/70">{r.kcal} kcal</p>
                </div>
                <a href="/vidoma" className="inline-flex items-center gap-1 text-xs bg-blue-500/20 text-blue-100 px-2 py-1 rounded-lg hover:bg-blue-500/30">
                  <ShoppingCart className="w-3 h-3"/> Dapatkan Bahan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="rounded-2xl p-4 bg-white/5 border border-white/15 backdrop-blur-xl text-blue-100">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-blue-300"/>
            <p className="text-sm">Subscriber bisa refresh rekomendasi tanpa batas dan dapat akses meal analytics mingguan.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
