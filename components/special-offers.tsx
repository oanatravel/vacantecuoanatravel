import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const offers = [
  {
    id: 1,
    title: "Sejur All Inclusive în Antalya",
    description: "7 nopți la hotel 5* cu all inclusive, transfer și zbor inclus",
    image: "/placeholder.svg?height=400&width=600",
    oldPrice: "750€",
    price: "599€",
    discount: "20%",
    slug: "sejur-all-inclusive-antalya",
  },
  {
    id: 2,
    title: "Weekend la Roma",
    description: "3 nopți la hotel 4* cu mic dejun, transfer și zbor inclus",
    image: "/placeholder.svg?height=400&width=600",
    oldPrice: "450€",
    price: "379€",
    discount: "15%",
    slug: "weekend-roma",
  },
  {
    id: 3,
    title: "Croazieră în Insulele Grecești",
    description: "7 nopți pe vas de croazieră cu pensiune completă și excursii incluse",
    image: "/placeholder.svg?height=400&width=600",
    oldPrice: "1200€",
    price: "899€",
    discount: "25%",
    slug: "croaziera-insulele-grecesti",
  },
]

export function SpecialOffers() {
  return (
    <section className="container py-8 bg-muted/50 rounded-lg">
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Oferte Speciale</h2>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          Profită de ofertele noastre limitate și rezervă-ți vacanța la prețuri imbatabile.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <Card key={offer.id} className="overflow-hidden h-full">
            <div className="aspect-[4/3] relative">
              <Badge className="absolute top-2 right-2 z-10">{offer.discount} REDUCERE</Badge>
              <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">{offer.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{offer.description}</p>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-sm line-through text-muted-foreground">{offer.oldPrice}</span>
                <span className="text-lg font-bold">{offer.price}</span>
                <span className="text-xs text-muted-foreground">/ persoană</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/oferte/${offer.slug}`} className="w-full">
                <Button className="w-full">Vezi oferta</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/oferte">
          <Button variant="outline">Vezi toate ofertele</Button>
        </Link>
      </div>
    </section>
  )
}
