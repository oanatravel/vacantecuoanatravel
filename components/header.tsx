"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Oana Travel</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Acasă
          </Link>
          <Link href="/destinatii" className="text-sm font-medium hover:underline underline-offset-4">
            Destinații
          </Link>
          <Link href="/oferte" className="text-sm font-medium hover:underline underline-offset-4">
            Oferte Speciale
          </Link>
          <Link href="/despre-noi" className="text-sm font-medium hover:underline underline-offset-4">
            Despre Noi
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="tel:+40123456789" className="hidden md:flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm">+40 123 456 789</span>
          </Link>
          <ModeToggle />
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Menu">
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  Acasă
                </Link>
                <Link href="/destinatii" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  Destinații
                </Link>
                <Link href="/oferte" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  Oferte Speciale
                </Link>
                <Link href="/despre-noi" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  Despre Noi
                </Link>
                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <div className="flex items-center gap-2 mt-4">
                  <Phone className="h-4 w-4" />
                  <Link href="tel:+40123456789" className="text-sm">
                    +40 123 456 789
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
