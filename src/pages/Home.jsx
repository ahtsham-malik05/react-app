import HeroSection from '../components/home/HeroSection';
import StackingCards from '../components/home/StackingCards';
import TestimonialsStats from '../components/home/TestimonialsStats';
import NewsletterCTA from '../components/home/NewsletterCTA';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <StackingCards />
      <TestimonialsStats />
      <NewsletterCTA />
    </div>
  );
}