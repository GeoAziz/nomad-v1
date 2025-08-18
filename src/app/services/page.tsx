import { motion } from 'framer-motion';
import { BarChart, Calendar, Handshake, Lightbulb, Users, Briefcase } from 'lucide-react';
import AnimatedDiv from '@/components/shared/AnimatedDiv';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const allServices = [
  {
    icon: <BarChart className="h-10 w-10 text-accent icon-glow" />,
    title: 'Forex Signals',
    description: 'Receive expertly analyzed FX signals, daily insights, and market trends to stay ahead in the financial markets. Perfect for both novice and experienced traders.',
  },
  {
    icon: <Calendar className="h-10 w-10 text-accent icon-glow" />,
    title: 'Events',
    description: 'Gain access to our exclusive calendar of online and offline events, from high-profile networking nights to skill-building workshops and webinars.',
  },
  {
    icon: <Handshake className="h-10 w-10 text-accent icon-glow" />,
    title: 'Business Gigs & Networking',
    description: 'Discover curated business gigs, freelance projects, and connect with a vibrant community of professionals to expand your network and grow your career.',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-accent icon-glow" />,
    title: 'Knowledge Base / Vybz Tips',
    description: "Tap into our comprehensive knowledge base filled with Vybz Tips, expert articles, and tutorials designed to give you an edge in business, finance, and personal development.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-accent icon-glow" />,
    title: 'Partnerships & Collabs',
    description: "Let's create synergy. We offer partnership and collaboration opportunities for brands, influencers, and businesses looking to tap into our dynamic ecosystem.",
  },
  {
    icon: <Users className="h-10 w-10 text-accent icon-glow" />,
    title: 'Community Access',
    description: 'Become part of an exclusive community of go-getters. Share ideas, collaborate on projects, and get support from like-minded individuals.',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <AnimatedDiv className="text-center">
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-glow">Our Services</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          A comprehensive suite of offerings designed to elevate your success. Explore the opportunities waiting for you in the VybzVerse.
        </p>
      </AnimatedDiv>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service, index) => (
          <AnimatedDiv key={service.title} delay={index * 0.1}>
            <Card className="bg-card/80 border-border backdrop-blur-sm h-full text-center transition-all duration-300 hover:border-primary hover:box-glow-primary hover:-translate-y-2">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="font-headline text-2xl mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{service.description}</p>
              </CardContent>
            </Card>
          </AnimatedDiv>
        ))}
      </div>
    </div>
  );
}
