import { Plus, Pencil, Trash2 } from 'lucide-react'
import { useState } from 'react'

export default function Tracking() {
  const [items, setItems] = useState([
    { id: 1, name: 'Oatmeal + Pisang', kcal: 320, carbs: 55, protein: 10, fat: 6 },
    { id: 2, name: 'Ayam Panggang + Salad', kcal: 480, carbs: 35, protein: 42, fat: 18 },
  ])

  const total = items.reduce(
    (acc, it) => ({
      kcal: acc.kcal + it.kcal,
      carbs: acc.carbs + it.carbs,
      protein: acc.protein + it.protein,
      fat: acc.fat + it.fat,
    }),
    { kcal: 0, carbs: 0, protein: 0, fat: 0 }
  )

  return (
    <div className="container mx-auto px-6 py-20 text-white pb-28">
      <div className="backdrop-blur-xl bg-white/5 border border-white/15 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Tracking Nutrisi</h2>
          <button className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm"><Plus className="w-4 h-4"/> Tambah</button>
        </div>
        <div className="mt-4 divide-y divide-white/10">
          {items.map((it) => (
            <div key={it.id} className="py-3 flex items-center justify-between">
              <div>
                <p className="font-medium">{it.name}</p>
                <p className="text-xs text-blue-200/70">{it.kcal} kcal • C {it.carbs} • P {it.protein} • L {it.fat}</p>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <button className="hover:text-white"><Pencil className="w-4 h-4"/></button>
                <button className="hover:text-white"><Trash2 className="w-4 h-4"/></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Kalori', value: `${total.kcal} kcal` },
          { label: 'Karbo', value: `${total.carbs} g` },
          { label: 'Protein', value: `${total.protein} g` },
          { label: 'Lemak', value: `${total.fat} g` },
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
