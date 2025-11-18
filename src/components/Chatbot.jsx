import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hai! Saya asisten nutrisi AI HLife. Tanyakan apa saja tentang gizi, resep, atau rencana makan.' }
  ])
  const [input, setInput] = useState('')

  const send = () => {
    if (!input.trim()) return
    setMessages(prev => [...prev, { role: 'user', content: input }, { role: 'assistant', content: 'Ini jawaban contoh. Nanti akan terhubung ke AI backend untuk respons pintar.' }])
    setInput('')
  }

  return (
    <div className="container mx-auto px-6 py-20 text-white pb-28">
      <div className="backdrop-blur-xl bg-white/5 border border-white/15 rounded-2xl p-4 flex flex-col h-[60vh]">
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {messages.map((m, idx) => (
            <div key={idx} className={`max-w-[80%] rounded-2xl px-3 py-2 border ${m.role === 'assistant' ? 'bg-white/10 border-white/15' : 'bg-blue-500/20 border-blue-400/20 ml-auto'}`}>
              <p className="text-sm">{m.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Tulis pertanyaan..." className="flex-1 bg-white/10 border border-white/15 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/40" />
          <button onClick={send} className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-xl text-sm"><Send className="w-4 h-4"/>Kirim</button>
        </div>
      </div>
    </div>
  )
}
