import { Providers } from '@/app/providers'
import '@/styles/globals.css'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <Providers>
        <body className=''>{children}</body>
      </Providers>
    </html>
  )
}
