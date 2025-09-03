export default function TransactionRow({item}){
  const sign = item.direction === 'in' ? '+' : ''
  return (
    <div className="py-3 flex items-center justify-between">
      <div>
        <div className="text-sm">{item.title}</div>
        <div className="text-xs text-gray-400">{new Date(item.time).toLocaleString()}</div>
      </div>
      <div className={"text-sm font-medium " + (item.direction==='in' ? 'text-green-600' : 'text-red-600')}>
        {sign}{item.amount} TON
      </div>
    </div>
  )
}
