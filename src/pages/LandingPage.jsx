import { useNavigate } from 'react-router-dom'
import Testimonial from '../components/Landing Page/Testimonial'
import Footer from '../components/Landing Page/Footer';
import Pricing from '../components/Landing Page/Pricing';
import HowItWorks from '../components/Landing Page/HowItWorks';
import ContactUs from '../components/Landing Page/ContactUs';
import Navbar from '../components/Landing Page/Navbar';
import Hero from '../components/Landing Page/Hero';
import Features from '../components/Landing Page/Features';



export default function LandingPage() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonial />
          <Pricing />
          <ContactUs />
        </main>
        <Footer />
      </div>
    </>
  )
}
