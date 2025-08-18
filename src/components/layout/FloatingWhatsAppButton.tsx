"use client";

import { motion } from 'framer-motion';
import { WhatsAppIcon } from '../icons/WhatsappIcon';

export default function FloatingWhatsAppButton() {
  const phoneNumber = "+1234567890";
  const message = "Hello Culture Nomad! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-primary-foreground shadow-lg box-glow-primary"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
    >
      <WhatsAppIcon className="w-9 h-9" />
    </motion.a>
  );
}
