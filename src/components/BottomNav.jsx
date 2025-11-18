import { NavLink, useLocation } from 'react-router-dom'
import { Home, PlusCircle, BarChart3, CalendarCheck2, MessageSquare } from 'lucide-react'

const tabs = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/tracking', label: 'Tracking', icon: PlusCircle },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/planner', label: 'Planner', icon: CalendarCheck2 },
  { to: '/chatbot', label: 'AI', icon: MessageSquare },
]

export default function BottomNav() {
  const location = useLocation()
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl px-3 py-2 flex gap-2">
        {tabs.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to
          return (
            <NavLink
              key={to}
              to={to}
              className={`group flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                active ? 'bg-blue-500/20 text-white' : 'text-blue-100 hover:bg-white/10'
              }`}
            >
              <Icon className={`w-5 h-5 ${active ? 'text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]' : 'text-blue-200'}`} />
              <span className="text-[10px] tracking-wide">{label}</span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
