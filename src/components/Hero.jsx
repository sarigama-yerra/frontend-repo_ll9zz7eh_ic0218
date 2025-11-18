import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-xl backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-6 sm:p-8">
          <p className="text-blue-200 text-xs uppercase tracking-[0.3em] mb-2">HLife • Vidoma</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            Healthy Lifestyle, Smarter Choices
          </h1>
          <p className="text-blue-100/90 mt-3 sm:mt-4 text-sm sm:text-base">
            Pantau nutrisi, dapatkan rekomendasi makanan berbasis AI, dan beli bahan sehat langsung via Vidoma.
          </p>
          <div className="mt-5 sm:mt-6 flex gap-3">
            <a href="/tracking" className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition">Mulai Tracking</a>
            <a href="/chatbot" className="px-4 py-2 rounded-xl bg-white/10 text-blue-100 hover:bg-white/20 transition">Tanya AI</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40" />
    </section>
  )
}
