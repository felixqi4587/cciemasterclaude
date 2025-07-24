'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import CoursesSection from '@/components/CoursesSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CoursesSection />
      <WhyChooseSection />
      <CtaSection />
      <Footer />
    </main>
  )
}