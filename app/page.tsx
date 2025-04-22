import { HeroSection } from "@/components/hero-section"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { SpecialOffers } from "@/components/special-offers"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <HeroSection />
      <FeaturedDestinations />
      <SpecialOffers />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
