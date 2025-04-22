import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const destinations = [
  {
    id: 1,
    name: "Santorini, Grecia",
    image: "/placeholder.svg?height=400&width=600",
    price: "de la 450€",
    slug: "santorini-grecia",
  },
  {
    id: 2,
    name: "Antalya, Turcia",
    image: "/placeholder.svg?height=400&width=600",
    price: "de la 350€",
    slug: "antalya-turcia",
  },
  {
    id: 3,
    name: "Barcelona, Spania",
    image: "/placeholder.svg?height=400&width=600",
    price: "de la 400€",
    slug: "barcelona-spania",
  },
  {
    id: 4,
    name: "Roma, Italia",
    image: "/placeholder.svg?height=400&width=600",
    price: "de la 380€",
    slug: "roma-italia",
  },
]

export function FeaturedDestinations() {
  return (
    <section className="container py-8">
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Destinații populare</h2>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          Descoperă cele mai căutate destinații ale momentului și lasă-te inspirat pentru următoarea ta aventură.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <Link key={destination.id} href={`/destinatii/${destination.slug}`}>
            <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{destination.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{destination.price}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/destinatii">
          <Button variant="outline">Vezi toate destinațiile</Button>
        </Link>
      </div>
    </section>
  )
}
