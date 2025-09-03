'use client'
import Link from 'next/link'
import { Home, Send, ArrowDownToLine, Clock, User } from 'lucide-react'

const Item = ({href, icon:Icon, label}) => (
  <Link href={href} className="flex flex-col items-center justify-center text-xs">
    <Icon size={20} />
    <span className="mt-1">{label}</span>
  </Link>
)

export default function BottomNav(){
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t py-2">
      <div className="max-w-md mx-auto grid grid-cols-5 text-gray-700">
        <Item href="/" icon={Home} label="Home" />
        <Item href="/transfer" icon={Send} label="Send" />
        <Item href="/receive" icon={ArrowDownToLine} label="Receive" />
        <Item href="/transactions" icon={Clock} label="Activity" />
        <Item href="/profile" icon={User} label="Profile" />
      </div>
    </nav>
  )
}
