'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
        Hello! My name is Wassim, and I&apos;m pursuing a Master of Science in Data Engineering for AI at the Data ScienceTech Institute (DSTI) in Sophia-Antipolis, France.
With a strong background in computer science and applied management (MIAGE) from the International University of Casablanca, Im specializing in designing robust data infrastructures and AI solutions.

In July 2023, I was selected for the University of Cincinnati Summer Program (Ohio, USA), where I completed:

Training in Data Science and Machine Learning

Negotiation management and interpersonal communication

Entrepreneurship Bootcamp - Startup Cincy: an introduction to creating and scaling innovative startups

Introduction to data analysis for information systems
        </p>
        <p>
          I&apos;m currently looking for a six-month (max) Data Engineering internship, starting early March 2026.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
