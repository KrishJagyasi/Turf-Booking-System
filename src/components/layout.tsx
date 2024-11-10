'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Turf Booking System</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/turfs" className="hover:underline">Turfs</Link>
            <Link href="/contact" className="hover:underline">Contact Us</Link>
            <Link href="/booking" className="hover:underline">Book Now</Link>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
        {isMobileMenuOpen && (
          <nav className="mt-2 flex flex-col space-y-2 md:hidden">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/turfs" className="hover:underline">Turfs</Link>
            <Link href="/contact" className="hover:underline">Contact Us</Link>
            <Link href="/booking" className="hover:underline">Book Now</Link>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Turf Booking System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}