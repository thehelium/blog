'use client';
import 'src/styles/globals.css';
import { motion as m } from 'framer-motion';
import Header from 'src/components/header';
import { Footer } from 'src/components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <m.body
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="bg-white dark:bg-gray-800"
      >
        <Header />

        <div className="flex min-h-screen flex-col">
          <main className="container m-auto mt-16 max-w-screen-lg flex-grow px-5 sm:px-12 md:px-20">
            {children}
          </main>

          <Footer />
        </div>
      </m.body>
    </html>
  );
}
