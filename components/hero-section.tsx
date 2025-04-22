"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { ro } from "date-fns/locale"

export function HeroSection() {
  const [departureDate, setDepartureDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()

  return (
    <section className="relative">
      <div className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Beautiful beach destination"
          width={1920}
          height={600}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="container">
            <div className="max-w-xl text-white space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Descoperă lumea cu Oana Travel
              </h1>
              <p className="text-lg md:text-xl">
                Vacanțe de vis la prețuri accesibile. Lasă-ne să transformăm visele tale în amintiri de neuitat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container relative -mt-24 z-10">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <form className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              <div className="space-y-2">
                <Label htmlFor="destination">Destinație</Label>
                <Select>
                  <SelectTrigger id="destination">
                    <SelectValue placeholder="Alege destinația" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="greece">Grecia</SelectItem>
                    <SelectItem value="turkey">Turcia</SelectItem>
                    <SelectItem value="spain">Spania</SelectItem>
                    <SelectItem value="italy">Italia</SelectItem>
                    <SelectItem value="egypt">Egipt</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Data plecare</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {departureDate ? format(departureDate, "PPP", { locale: ro }) : <span>Alege data</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>Data întoarcere</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {returnDate ? format(returnDate, "PPP", { locale: ro }) : <span>Alege data</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests">Persoane</Label>
                <Select>
                  <SelectTrigger id="guests">
                    <SelectValue placeholder="Număr persoane" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 persoană</SelectItem>
                    <SelectItem value="2">2 persoane</SelectItem>
                    <SelectItem value="3">3 persoane</SelectItem>
                    <SelectItem value="4">4 persoane</SelectItem>
                    <SelectItem value="5+">5+ persoane</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full">Caută vacanțe</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
