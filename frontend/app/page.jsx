'use client'
import Link from 'next/link'
import BalanceCard from '@/components/BalanceCard'
import QuickActions from '@/components/QuickActions'
import TransactionList from '@/components/TransactionList'
import BottomNav from '@/components/BottomNav'

export default function Page() {
  return (
    <div className="min-h-screen px-4 pb-24">
      <header className="py-4">
        <h1 className="text-2xl font-semibold">TON Pay</h1>
        <p className="text-xs text-gray-500">Blue, clean, fast.</p>
      </header>
      <BalanceCard />
      <QuickActions />
      <TransactionList />
      <BottomNav />
    </div>
  )
}
