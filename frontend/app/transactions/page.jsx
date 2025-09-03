'use client'
import { useEffect, useState } from 'react'
import TransactionRow from '@/components/TransactionRow'
import BottomNav from '@/components/BottomNav'

export default function TransactionsPage(){
  const [items,setItems] = useState([])
  useEffect(()=>{ fetch('/api/transactions').then(r=>r.json()).then(j=>setItems(j.items||[])) },[])
  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>
      <div className="bg-white rounded-2xl shadow-soft divide-y">
        {items.map(x => <TransactionRow key={x.id} item={x} />)}
        {!items.length && <div className="p-4 text-sm text-gray-500">No transactions yet.</div>}
      </div>
      <BottomNav />
    </div>
  )
}
