"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart, Calendar, Handshake, Lightbulb, Users } from 'lucide-react';

import SplashScreen from '@/components/shared/SplashScreen';
import AnimatedDiv from '@/components/shared/AnimatedDiv';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const services = [
  {
    icon: <BarChart className="h-10 w-10 text-accent icon-glow" />,
    title: 'Forex Signals',
    description: 'Daily FX insights and signals to navigate the markets.',
  },
  {
    icon: <Calendar className="h-10 w-10 text-accent icon-glow" />,
    title: 'Events',
    description: 'Access to exclusive events, both online and offline.',
  },
  {
    icon: <Handshake className="h-10 w-10 text-accent icon-glow" />,
    title: 'Business Gigs',
    description: 'Connect with networking opportunities and business gigs.',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-accent icon-glow" />,
    title: 'Vybz Tips',
    description: 'A knowledge base full of tips for growth and success.',
  },
];

export default function HomePageClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('cultura_nomad_visited');
    if (hasVisited) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('cultura_nomad_visited', 'true');
      }, 3000); // Splash screen duration
    }
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden bg-grid">
         <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <AnimatedDiv
          className="z-10 flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-wider text-glow">
            Welcome to Culture Nomad
          </h1>
          <p className="max-w-2xl text-lg text-foreground/80">
            Discover and connect with high-value opportunities. Your one-stop platform for FX signals, events, gigs, and more.
          </p>
          <Button asChild size="lg" className="font-bold group bg-primary hover:bg-primary/90 text-primary-foreground box-glow-primary transition-all duration-300">
            <a href="https://wa.me/+1234567890?text=I'm%20interested%20in%20Culture%20Nomad!" target="_blank" rel="noopener noreferrer">
              Get Hooked Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </AnimatedDiv>
      </section>

      {/* Services Section */}
      <section className="w-full max-w-7xl py-20 px-4">
        <AnimatedDiv>
          <h2 className="font-headline text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <motion.div key={service.title} whileHover={{ y: -10, scale: 1.05 }}>
                <Card className="bg-card/80 border-border backdrop-blur-sm h-full text-center transition-all duration-300 hover:border-primary hover:box-glow-primary">
                  <CardHeader className="items-center">
                    {service.icon}
                    <CardTitle className="font-headline text-2xl mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </AnimatedDiv>
      </section>
      
      {/* About Us Teaser */}
      <section className="w-full py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <AnimatedDiv>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Culture Nomad Community"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
              data-ai-hint="community event"
            />
          </AnimatedDiv>
          <AnimatedDiv delay={0.2}>
            <h2 className="font-headline text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-foreground/80 mb-6 text-lg">
              Culture Nomad is more than just a platform; it's an ecosystem designed for growth, connection, and success. We curate the best opportunities to help you elevate your game.
            </p>
            <Button asChild className="group">
              <Link href="/about">
                Learn More <Users className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedDiv>
        </div>
      </section>

    </div>
  );
}
