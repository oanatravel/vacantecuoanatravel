import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Maria Popescu",
    location: "București",
    text: "Am rezervat un sejur în Grecia prin Oana Travel și a fost o experiență minunată. Totul a fost organizat perfect, de la zbor până la cazare. Cu siguranță voi apela din nou la serviciile lor!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Ion Ionescu",
    location: "Cluj-Napoca",
    text: "Vacanța în Turcia organizată de Oana Travel a depășit toate așteptările. Hotelul a fost excelent, iar ghidul local foarte amabil și profesionist. Recomand cu încredere!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Elena Dumitrescu",
    location: "Timișoara",
    text: "Am călătorit cu familia în Italia și totul a fost perfect. Oana Travel ne-a oferit sfaturi utile și a fost mereu disponibilă pentru orice întrebare. O agenție de încredere!",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function Testimonials() {
  return (
    <section className="container py-8">
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ce spun clienții noștri</h2>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          Descoperă experiențele clienților noștri și lasă-te convins de calitatea serviciilor noastre.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="h-full">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm">{testimonial.text}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <div className="flex items-center gap-4">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
