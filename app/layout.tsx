import './globals.css'
import ThemeChanger from './components/ThemeChanger'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeChanger />
        <main className="min-h-screen p-4">
          {children}
        </main>
      </body>
    </html>
  )
}