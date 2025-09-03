import Link from 'next/link'

const actions = [
  { title: 'Send', href: '/transfer' },
  { title: 'Receive', href: '/receive' },
  { title: 'Bills', href: '/transactions' },
  { title: 'Airtime', href: '/transactions' },
  { title: 'Data', href: '/transactions' },
  { title: 'More', href: '/profile' },
]

export default function QuickActions(){
  return (
    <div className="grid grid-cols-3 gap-3 mb-4">
      {actions.map(a => (
        <Link key={a.title} href={a.href} className="bg-white rounded-xl p-3 text-center shadow-soft">
          <div className="h-12 w-12 mx-auto mb-2 rounded-full bg-blue-50 flex items-center justify-center text-primary">{a.title[0]}</div>
          <div className="text-sm">{a.title}</div>
        </Link>
      ))}
    </div>
  )
}
