import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbarr';
//import ChatWidget from './components/ChatWidget'; // Optional

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero /> 
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    
    </main>
  );
}

