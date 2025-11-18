export default function VidomaPage(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 relative text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_110%,rgba(14,165,233,0.2),transparent_40%)]" />
      <div className="relative container mx-auto px-6 py-24">
        <div className="max-w-lg mx-auto backdrop-blur-xl bg-white/5 border border-white/15 rounded-3xl p-8 text-center">
          <p className="text-blue-200 text-xs uppercase tracking-[0.3em] mb-2">Vidoma Marketplace</p>
          <h1 className="text-3xl font-bold">Segera Hadir</h1>
          <p className="text-blue-100/90 mt-3">Belanja bahan makanan sehat, terintegrasi langsung dengan rekomendasi HLife.</p>
          <a href="/" className="inline-block mt-6 px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition">Kembali ke Beranda</a>
        </div>
      </div>
    </div>
  )
}
