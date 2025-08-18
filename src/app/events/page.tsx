import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedDiv from "@/components/shared/AnimatedDiv";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin } from 'lucide-react';

const highlightedEvents = [
  { name: "Annual Forex Summit", date: "Dec 15, 2024", image: "https://placehold.co/800x400.png", dataAiHint: "business conference" },
  { name: "Networking Night", date: "Jan 20, 2025", image: "https://placehold.co/800x400.png", dataAiHint: "social event" },
  { name: "Tech & Vybz Mixer", date: "Feb 10, 2025", image: "https://placehold.co/800x400.png", dataAiHint: "technology mixer" },
];

const allEvents = [
  { name: 'Future of Finance Webina', date: 'March 05, 2025', location: 'Online', type: 'upcoming', description: 'Join industry experts to discuss the future of decentralized finance and forex trading.', image: "https://placehold.co/600x400.png", dataAiHint: "finance webinar" },
  { name: 'VybzVerse Launch Party', date: 'October 28, 2024', location: 'New York, NY', type: 'past', description: 'Celebrating the official launch of the VybzVerse platform with music, networking, and fun.', image: "https://placehold.co/600x400.png", dataAiHint: "launch party" },
  { name: 'Crypto & Coffee Meetup', date: 'September 15, 2024', location: 'San Francisco, CA', type: 'past', description: 'A casual meetup for crypto enthusiasts to discuss the latest trends over coffee.', image: "https://placehold.co/600x400.png", dataAiHint: "cafe meetup" },
];

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <AnimatedDiv className="text-center">
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-glow">Events</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          Stay updated with our upcoming events and relive moments from the past.
        </p>
      </AnimatedDiv>
      
      {/* Highlighted Events Carousel */}
      <AnimatedDiv delay={0.2} className="mt-16">
        <h2 className="font-headline text-3xl font-bold text-center mb-8">Highlights</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {highlightedEvents.map((event, index) => (
              <CarouselItem key={index}>
                <Card className="bg-transparent border-0">
                  <CardContent className="relative flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                    <Image src={event.image} alt={event.name} layout="fill" objectFit="cover" className="brightness-50" data-ai-hint={event.dataAiHint} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                      <h3 className="font-headline text-4xl font-bold text-white">{event.name}</h3>
                      <p className="text-xl text-white/80 mt-2">{event.date}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-50px]" />
          <CarouselNext className="right-[-50px]" />
        </Carousel>
      </AnimatedDiv>

      {/* Events Timeline */}
      <AnimatedDiv delay={0.4} className="mt-20">
        <h2 className="font-headline text-3xl font-bold text-center mb-12">Event Timeline</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/50 transform -translate-x-1/2"></div>
          {allEvents.map((event, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12"></div>
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-primary rounded-full box-glow-primary">
                <Calendar className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="w-5/12">
                <Card className={`p-6 bg-card/80 backdrop-blur-sm border-border hover:border-accent transition-colors ${index % 2 === 0 ? 'text-right' : ''}`}>
                  <Badge variant={event.type === 'upcoming' ? 'default' : 'secondary'} className={`mb-2 ${event.type === 'upcoming' ? 'bg-primary' : ''}`}>{event.type}</Badge>
                  <h3 className="font-headline text-2xl font-bold mb-2">{event.name}</h3>
                  <div className={`flex items-center text-sm text-foreground/70 mb-3 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                    <Clock className="w-4 h-4 mr-2" /> {event.date}
                    <MapPin className="w-4 h-4 ml-4 mr-2" /> {event.location}
                  </div>
                  <p className="text-foreground/80 mb-4">{event.description}</p>
                  {event.type === 'upcoming' && <Button>Get More Info</Button>}
                </Card>
              </div>
            </div>
          ))}
        </div>
      </AnimatedDiv>
    </div>
  );
}
