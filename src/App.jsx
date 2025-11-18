import Hero from './components/Hero'
import HomeDashboard from './components/HomeDashboard'
import Tracking from './components/Tracking'
import Analytics from './components/Analytics'
import Planner from './components/Planner'
import Chatbot from './components/Chatbot'
import BottomNav from './components/BottomNav'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_110%,rgba(14,165,233,0.2),transparent_40%)]" />

      <Hero />
      <HomeDashboard />
      <BottomNav />
    </div>
  )
}

export default App
