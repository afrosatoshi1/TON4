'use client'
import { useEffect, useState } from 'react'

export default function ReceivePage(){
  const [address,setAddress] = useState('')
  useEffect(()=>{
    fetch('/api/receive-address').then(r=>r.json()).then(j=>setAddress(j.address))
  },[])
  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">Your TON Address</h2>
      <div className="p-3 rounded-lg border">{address || 'Loading...'}</div>
      <p className="text-xs text-gray-500 mt-2">Share this address to receive payments.</p>
    </div>
  )
}
