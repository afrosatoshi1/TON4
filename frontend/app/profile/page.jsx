export default function ProfilePage(){
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">Profile & Settings</h2>
      <ul className="space-y-2 text-sm">
        <li className="p-3 rounded-lg bg-white shadow-soft">KYC Verification</li>
        <li className="p-3 rounded-lg bg-white shadow-soft">Security: PIN & 2FA</li>
        <li className="p-3 rounded-lg bg-white shadow-soft">Linked Accounts</li>
        <li className="p-3 rounded-lg bg-white shadow-soft">About / Help</li>
      </ul>
    </div>
  )
}
