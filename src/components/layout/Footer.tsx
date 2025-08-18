import Link from 'next/link';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import { Button } from '../ui/button';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary/20 py-8 px-4 mt-20 border-t border-border/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-headline text-2xl font-bold text-primary text-glow">VybzVerse</h3>
          <p className="text-foreground/70 mt-2">Connecting you to a universe of opportunities.</p>
        </div>
        <div>
          <h4 className="font-headline text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
            <li><Link href="/enquiry" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline text-lg font-semibold mb-3">Connect With Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-primary transition-colors" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-primary transition-colors" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5 hover:text-primary transition-colors" /></a>
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-border/50 text-center text-foreground/50 text-sm">
        <p>&copy; {new Date().getFullYear()} VybzVerse. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
