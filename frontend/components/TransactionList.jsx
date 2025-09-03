'use client'
import { useEffect, useState } from 'react'
import TransactionRow from './TransactionRow'

export default function TransactionList(){
  const [items,setItems] = useState([])
  useEffect(()=>{ fetch('/api/transactions').then(r=>r.json()).then(j=>setItems(j.items||[])) },[])
  return (
    <div className="bg-white rounded-2xl p-4 shadow-soft">
      <h4 className="font-semibold mb-3">Recent Activity</h4>
      <div className="divide-y">
        {items.slice(0,5).map(x => <TransactionRow key={x.id} item={x} />)}
        {!items.length && <div className="py-3 text-sm text-gray-500">No transactions yet.</div>}
      </div>
    </div>
  )
}
