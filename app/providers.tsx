'use client'

import PlausibleProvider from 'next-plausible'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <PlausibleProvider domain='devopsbarista.com' enabled trackLocalhost />
    </>
  )
}
