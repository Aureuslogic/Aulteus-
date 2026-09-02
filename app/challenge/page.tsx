import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import styles from '@/components/sections/challenge/challenge.module.css';
import ChallengeAnnouncementBar from '@/components/sections/challenge/challengeAnnouncementBar';
import TickerTape from '@/components/sections/challenge/tickerTape';
import ChallengeHero from '@/components/sections/challenge/challengeHero';
import ChallengeStats from '@/components/sections/challenge/challengeStats';
import ChallengeFramework from '@/components/sections/challenge/challengeFramework';
import ChallengeProgramme from '@/components/sections/challenge/challengeProgramme';
import ChallengeChartFigure from '@/components/sections/challenge/challengeChartFigure';
import ChallengeFilter from '@/components/sections/challenge/challengeFilter';
import ChallengeRegisterSection from '@/components/sections/challenge/challengeRegisterSection';

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['400', '500', '600'],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  weight: ['400', '500', '600', '700'],
});

const TITLE = 'The 30 Day Trading Challenge | Aulteus Logic';
const DESCRIPTION =
  'Four weeks to learn how fundamentals and technicals work together, using the EIT Framework. Live, online, and free. Registration open now.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/challenge',
  },
  openGraph: {
    type: 'website',
    url: '/challenge',
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ChallengePage() {
  return (
    <div className={`${barlow.variable} ${barlowCondensed.variable} ${styles.page}`}>
      <ChallengeAnnouncementBar />
      <TickerTape />
      <ChallengeHero />
      <ChallengeStats />
      <ChallengeFramework />
      <ChallengeProgramme />
      <ChallengeChartFigure />
      <ChallengeFilter />
      <ChallengeRegisterSection />
    </div>
  );
}
