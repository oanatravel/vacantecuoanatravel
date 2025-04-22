import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Oana Travel</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Agenție de turism cu experiență, oferind servicii complete pentru vacanțe de vis în toată lumea.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinații populare</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinatii/grecia" className="text-muted-foreground hover:text-primary">
                  Grecia
                </Link>
              </li>
              <li>
                <Link href="/destinatii/turcia" className="text-muted-foreground hover:text-primary">
                  Turcia
                </Link>
              </li>
              <li>
                <Link href="/destinatii/spania" className="text-muted-foreground hover:text-primary">
                  Spania
                </Link>
              </li>
              <li>
                <Link href="/destinatii/italia" className="text-muted-foreground hover:text-primary">
                  Italia
                </Link>
              </li>
              <li>
                <Link href="/destinatii/egipt" className="text-muted-foreground hover:text-primary">
                  Egipt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Informații utile</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/despre-noi" className="text-muted-foreground hover:text-primary">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link href="/termeni-si-conditii" className="text-muted-foreground hover:text-primary">
                  Termeni și condiții
                </Link>
              </li>
              <li>
                <Link href="/politica-de-confidentialitate" className="text-muted-foreground hover:text-primary">
                  Politica de confidențialitate
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="text-muted-foreground hover:text-primary">
                  Politica de cookies
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  Întrebări frecvente
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Strada Exemplu, Nr. 123, București, România</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">+40 123 456 789</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">contact@oanatravel.ro</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Oana Travel. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}
