import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ProductsSection from '@/components/ProductsSection'
import BrandStory from '@/components/BrandStory'
import ProcessSection from '@/components/ProcessSection'
import MaterialsSection from '@/components/MaterialsSection'
import ApplicationsSection from '@/components/ApplicationsSection'
import EuropeSection from '@/components/EuropeSection'
import TurkeySection from '@/components/TurkeySection'
import TrustSignals from '@/components/TrustSignals'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import MobileBar from '@/components/MobileBar'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <ProductsSection />
        <BrandStory />
        <ProcessSection />
        <MaterialsSection />
        <ApplicationsSection />
        <EuropeSection />
        <TurkeySection />
        <TrustSignals />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
