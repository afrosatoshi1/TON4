'use client'
import { useEffect, useState } from 'react'
import { Wallet } from 'lucide-react'

export default function BalanceCard(){
  const [data,setData] = useState({balance: 0, currency:'TON'})
  useEffect(()=>{ fetch('/api/balance').then(r=>r.json()).then(setData) },[])
  return (
    <div className="bg-white rounded-2xl p-5 shadow-soft mb-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-gray-500">Total Balance</div>
          <div className="text-3xl font-semibold mt-1">{data.balance?.toFixed ? data.balance.toFixed(3) : data.balance} {data.currency}</div>
        </div>
        <div className="p-3 bg-blue-50 rounded-xl">
          <Wallet className="text-primary" />
        </div>
      </div>
    </div>
  )
}
