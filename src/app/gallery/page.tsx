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

const galleryItems = [
  { type: 'image', src: 'https://placehold.co/600x400.png', alt: 'Event Moment 1', caption: 'Launch Party Celebration', dataAiHint: "party crowd" },
  { type: 'image', src: 'https://placehold.co/600x400.png', alt: 'Event Moment 2', caption: 'Networking Session', dataAiHint: "business networking" },
  { type: 'image', src: 'https://placehold.co/600x400.png', alt: 'Event Moment 3', caption: 'Keynote Speaker', dataAiHint: "public speaker" },
  { type: 'image', src: 'https://placehold.co/600x400.png', alt: 'Event Moment 4', caption: 'Community Meetup', dataAiHint: "group photo" },
  { type: 'image', src: 'https://placehold.co/600x400.png', alt: 'Event Moment 5', caption: 'Forex Workshop', dataAiHint: "workshop presentation" },
  { type: 'image', src: 'https://placehold.co/600x400.png', alt: 'Event Moment 6', caption: 'After Party Vybz', dataAiHint: "concert lights" },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <AnimatedDiv className="text-center">
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-glow">Vybz Moments</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          A glimpse into the vibrant life and moments from our past events.
        </p>
      </AnimatedDiv>

      <AnimatedDiv delay={0.2} className="mt-16">
        <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {galleryItems.map((item, index) => (
              <CarouselItem key={index}>
                 <Card className="bg-transparent border-0">
                  <CardContent className="relative group flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                    {item.type === 'image' ? (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={item.dataAiHint}
                      />
                    ) : (
                      <video controls src={item.src} className="w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-lg font-bold">{item.caption}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </AnimatedDiv>

       <AnimatedDiv delay={0.4} className="mt-20">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
             <div key={index} className="overflow-hidden rounded-lg break-inside-avoid group relative">
                <Image
                    src={item.src}
                    alt={item.alt}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                    data-ai-hint={item.dataAiHint}
                />
                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-semibold">{item.caption}</p>
                </div>
            </div>
          ))}
        </div>
      </AnimatedDiv>
    </div>
  );
}
