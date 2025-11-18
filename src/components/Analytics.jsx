import { useMemo } from 'react'

export default function Analytics() {
  const data = useMemo(() => [
    { day: 'Sen', kcal: 1650 },
    { day: 'Sel', kcal: 1720 },
    { day: 'Rab', kcal: 1800 },
    { day: 'Kam', kcal: 1600 },
    { day: 'Jum', kcal: 1900 },
    { day: 'Sab', kcal: 1750 },
    { day: 'Min', kcal: 1680 },
  ], [])

  const maxKcal = Math.max(...data.map(d => d.kcal))

  return (
    <div className="container mx-auto px-6 py-20 text-white pb-28">
      <div className="backdrop-blur-xl bg-white/5 border border-white/15 rounded-2xl p-4">
        <h2 className="text-lg font-semibold">Progress Mingguan</h2>
        <div className="mt-6 grid grid-cols-7 gap-3 h-48 items-end">
          {data.map(d => (
            <div key={d.day} className="flex flex-col items-center gap-2">
              <div className="w-7 sm:w-10 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-xl shadow-[0_8px_30px_rgba(59,130,246,0.35)]" style={{ height: `${(d.kcal / maxKcal) * 100}%`}} />
              <span className="text-xs text-blue-200/70">{d.day}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'BMI', value: '22.1' },
          { label: 'Kebutuhan Kalori', value: '1.850 kcal' },
          { label: 'Berat Saat Ini', value: '67.4 kg' },
          { label: 'Streak', value: '7 hari' },
        ].map((c) => (
          <div key={c.label} className="rounded-2xl p-4 bg-white/5 border border-white/15 backdrop-blur-xl">
            <p className="text-xs text-blue-200/70">{c.label}</p>
            <p className="text-xl font-semibold text-white">{c.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
