import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import ContactLinks from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="team">
        <Team />
        <ContactLinks />
      </div>
      <div id="contact" className="bg-gray-50 dark:bg-gray-900">
        <Footer />
      </div>
    </main>
  );
} 