"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import AnimatedDiv from "@/components/shared/AnimatedDiv";
import { WhatsAppIcon } from "@/components/icons/WhatsappIcon";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  service: z.string().min(1, "Please select a service."),
  message: z.string().optional(),
});

export default function EnquiryPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <AnimatedDiv className="text-center">
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-glow">Hook Us</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          Have a question, a proposal, or just want to say hi? We'd love to hear from you.
        </p>
      </AnimatedDiv>

      <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <AnimatedDiv>
          <h2 className="font-headline text-3xl font-bold mb-4">Send a Message</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="bg-secondary/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Needed</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-secondary/50">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Forex Signals">Forex Signals</SelectItem>
                        <SelectItem value="Events">Events</SelectItem>
                        <SelectItem value="Business Gigs">Business Gigs</SelectItem>
                        <SelectItem value="Partnerships">Partnerships & Collabs</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us more..." {...field} className="bg-secondary/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full group">
                Send Enquiry <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Form>
        </AnimatedDiv>
        <AnimatedDiv delay={0.2} className="flex flex-col items-center justify-center text-center p-8 bg-card/50 rounded-lg border border-border">
            <WhatsAppIcon className="w-20 h-20 text-primary icon-glow" />
            <h2 className="font-headline text-3xl font-bold mt-6 mb-4">Chat With Us Directly</h2>
            <p className="text-foreground/80 mb-6">
              For immediate assistance or collaborations, reach out to us directly on WhatsApp.
            </p>
            <Button asChild size="lg" className="font-bold group bg-primary hover:bg-primary/90 text-primary-foreground box-glow-primary transition-all duration-300">
                <a href="https://wa.me/+1234567890?text=I'm%20interested%20in%20collaborating%20with%20Culture%20Nomad!" target="_blank" rel="noopener noreferrer">
                Open WhatsApp <MessageSquare className="ml-2 h-5 w-5" />
                </a>
            </Button>
        </AnimatedDiv>
      </div>
    </div>
  );
}
