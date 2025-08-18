import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Eye, Rocket } from 'lucide-react';

import AnimatedDiv from '@/components/shared/AnimatedDiv';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const values = [
  {
    icon: <Rocket className="h-10 w-10 text-accent icon-glow" />,
    title: 'Our Mission',
    description: 'To provide a one-stop platform that connects individuals with high-value opportunities, fostering growth and success in a dynamic digital world.',
  },
  {
    icon: <Eye className="h-10 w-10 text-accent icon-glow" />,
    title: 'Our Vision',
    description: 'To build a global ecosystem where every user can effortlessly discover and hook into opportunities that align with their personal and professional goals.',
  },
  {
    icon: <Award className="h-10 w-10 text-accent icon-glow" />,
    title: 'Why Us?',
    description: 'We blend futuristic tech with a curated experience, ensuring you get access to verified signals, events, and connections that truly matter.',
  },
];

const testimonials = [
  {
    name: 'Alex Johnson',
    title: 'Forex Trader',
    quote: "VybzVerse transformed my trading journey. The signals are accurate, and the community is incredibly supportive. Highly recommended!",
    avatar: 'https://placehold.co/100x100.png',
  },
  {
    name: 'Samantha Lee',
    title: 'Event Organizer',
    quote: "The platform's reach helped me promote my events to a targeted audience. The networking opportunities are second to none.",
    avatar: 'https://placehold.co/100x100.png',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <AnimatedDiv className="text-center">
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-glow">About VybzVerse</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          We are the architects of connection, building bridges to a universe of opportunities. Learn about our journey and what drives us.
        </p>
      </AnimatedDiv>

      <AnimatedDiv delay={0.2} className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="bg-card/80 border-border backdrop-blur-sm text-center transition-all duration-300 hover:border-primary hover:box-glow-primary">
              <CardHeader className="items-center">
                {value.icon}
                <CardTitle className="font-headline text-2xl mt-4">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedDiv>

      <AnimatedDiv delay={0.4} className="mt-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Our Story"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            data-ai-hint="team collaboration"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="font-headline text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-foreground/80 mb-4">
            Born from a desire to simplify the search for valuable opportunities, VybzVerse started as a small community on WhatsApp. We saw a need for a centralized, trusted platform where people could find legitimate FX signals, career-enhancing gigs, and meaningful connections.
          </p>
          <p className="text-foreground/80">
            Today, we've evolved into a full-fledged ecosystem, but our core principle remains the same: to empower our users by providing direct access to a world of potential.
          </p>
        </div>
      </AnimatedDiv>

      <AnimatedDiv delay={0.2} className="mt-20 text-center">
        <h2 className="font-headline text-4xl font-bold mb-12">What Our Community Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card/80 border-border p-6 text-left">
              <CardContent className="p-0">
                <p className="text-foreground/90 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait" />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-foreground/70">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedDiv>
    </div>
  );
}
