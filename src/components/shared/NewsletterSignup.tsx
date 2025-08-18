"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import AnimatedDiv from "./AnimatedDiv";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export default function NewsletterSignup() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Newsletter Signup:", values);
    toast({
      title: "Subscription Successful!",
      description: "Thanks for joining the Culture Nomad network. Keep an eye on your inbox!",
    });
    form.reset();
  }

  return (
    <section className="w-full py-20 px-4 bg-secondary/20">
        <AnimatedDiv className="max-w-4xl mx-auto text-center bg-card/50 p-8 md:p-12 rounded-lg border border-border/50 backdrop-blur-sm">
            <h2 className="font-headline text-4xl font-bold text-glow mb-4">Join the Nomad Network</h2>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
                Stay ahead of the curve. Subscribe to our newsletter for the latest FX signals, exclusive event invites, and insider tips delivered right to your inbox.
            </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex max-w-lg mx-auto items-start gap-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                            <Input placeholder="your.email@example.com" {...field} className="bg-background/70 text-lg h-12" />
                            </FormControl>
                            <FormMessage className="text-left" />
                        </FormItem>
                        )}
                    />
                    <Button type="submit" size="lg" className="h-12 group box-glow-primary">
                        Subscribe <Mail className="ml-2 h-5 w-5 group-hover:animate-pulse" />
                    </Button>
                </form>
            </Form>
        </AnimatedDiv>
    </section>
  );
}
