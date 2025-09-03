import '../styles/globals.css'

export const metadata = { title: 'TON Pay', description: 'Opay-style UI (blue)' }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen max-w-md mx-auto bg-white/0">
          {children}
        </div>
      </body>
    </html>
  )
}
