"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Abonare reușită!",
      description: "Vei primi cele mai noi oferte pe email.",
    })

    setEmail("")
    setIsLoading(false)
  }

  return (
    <section className="container py-8">
      <div className="rounded-lg bg-primary/10 p-8">
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Abonează-te la newsletter</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Primește cele mai noi oferte și promoții direct în inbox-ul tău. Fii primul care află despre destinațiile
            noastre speciale.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Adresa ta de email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Se procesează..." : "Abonează-te"}
          </Button>
        </form>
      </div>
    </section>
  )
}
