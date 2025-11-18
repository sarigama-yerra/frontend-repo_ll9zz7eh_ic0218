import { Calendar, CheckCircle2, ListChecks } from 'lucide-react'

export default function Planner() {
  const week = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']
  const sample = ['Sarapan', 'Makan Siang', 'Makan Malam']

  return (
    <div className="container mx-auto px-6 py-20 text-white pb-28">
      <div className="backdrop-blur-xl bg-white/5 border border-white/15 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Weekly Meal Planner</h2>
          <button className="text-xs bg-blue-500/20 hover:bg-blue-500/30 px-3 py-1.5 rounded-lg">Generate Grocery List</button>
        </div>
        <div className="mt-4 grid grid-cols-7 gap-2">
          {week.map((d) => (
            <div key={d} className="rounded-xl bg-white/5 border border-white/10 p-2">
              <p className="text-xs text-blue-200/70 mb-2">{d}</p>
              <div className="space-y-2">
                {sample.map((s) => (
                  <div key={s} className="text-xs bg-white/10 px-2 py-1 rounded-lg border border-white/10">{s}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { icon: Calendar, title: 'Meal Prep Scheduler', desc: 'Atur jadwal masak mingguan dengan pengingat.' },
          { icon: ListChecks, title: 'Grocery List', desc: 'Daftar belanja otomatis dari rencana makan.' },
          { icon: CheckCircle2, title: 'Favorites', desc: 'Simpan makanan favorit untuk akses cepat.' },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl p-4 bg-white/5 border border-white/15 backdrop-blur-xl">
            <c.icon className="w-5 h-5 text-blue-300"/>
            <p className="text-sm font-medium mt-2">{c.title}</p>
            <p className="text-xs text-blue-200/70">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
