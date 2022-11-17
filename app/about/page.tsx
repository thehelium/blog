'use client';
import { motion as m } from 'framer-motion';

export default function About() {
  return (
    <div title="About">
      <m.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="pb-7"
      >
        <p className="text-lg font-medium">Hi, I'm</p>
        <p className="text-8xl font-bold pt-4 pb-20">
          Harris
          <br />
          Tsai
        </p>
        <p className="font-medium text-lg">
          I write code, love basketball, and contribute to Open Source.
          <br />
          Currently a Front-end developer, living in China.
        </p>
      </m.article>
    </div>
  );
}
