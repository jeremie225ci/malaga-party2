import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: 'Malaga Party',
  description: 'Reserva tu lugar para la noche más loca de Málaga. Inscríbete y recibe tu confirmación.',
  generator: 'malagaparty.com',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
