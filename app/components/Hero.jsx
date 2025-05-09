'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-white text-black dark:bg-blue-900 dark:text-white py-20 text-center transition-colors duration-300">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Sell Unused Software Licenses
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg md:text-xl mb-6"
      >
        Get instant valuation and fast payouts. Turn your licenses into cash!
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-blue-600 dark:bg-white dark:text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-300 transition-colors duration-300"
      >
        Get a Quote
      </motion.button>
    </section>
  );
}
