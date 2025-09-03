'use client'
import { useState } from 'react'

export default function TransferPage(){
  const [to,setTo]=useState('')
  const [amount,setAmount]=useState('')
  const [note,setNote]=useState('')
  const [resp,setResp]=useState(null)

  async function send(){
    const r = await fetch('/api/send',{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({to,amount,note})})
    const j = await r.json()
    setResp(j)
  }

  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Send Money</h2>
      <div className="space-y-3">
        <input className="w-full border rounded-lg p-3" placeholder="Recipient address/user" value={to} onChange={e=>setTo(e.target.value)} />
        <input type="number" className="w-full border rounded-lg p-3" placeholder="Amount (TON)" value={amount} onChange={e=>setAmount(e.target.value)} />
        <input className="w-full border rounded-lg p-3" placeholder="Note (optional)" value={note} onChange={e=>setNote(e.target.value)} />
        <button onClick={send} className="w-full bg-primary text-white py-3 rounded-lg">Send</button>
        {resp && <pre className="text-xs bg-gray-50 p-3 rounded">{JSON.stringify(resp,null,2)}</pre>}
      </div>
    </div>
  )
}
