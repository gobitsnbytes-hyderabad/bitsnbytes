"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { PageSection } from "@/components/page-section";
import { LoadingInline } from "@/components/loading-wrapper";
import {
  GlowingCard,
  GlowingCardTitle,
  GlowingCardDescription,
} from "@/components/ui/glowing-card";
import type { CoreTeamMember, Volunteer } from "@/components/team-case-study";

// Lazy load heavy components
const TeamCaseStudy = dynamic(() => import("@/components/team-case-study"), {
  loading: () => <LoadingInline />,
  ssr: true,
});

const aboutContent = {
  title: "About Bits&Bytes",
  description:
    "Innovate. Collaborate. Hack. A teen-led code club. Three co-founders, no adults in the room. Built from scratch.",
  sections: [
    {
      title: "The Origin Story",
      description:
        "We were hosting Daydream Lucknow under Hack Club. Everything was set: venue, sponsors, participants. At the last moment, Hack Club pulled the venue. So we went fully independent and built the entire hackathon in 13 days flat. That's probably the most honest thing we can tell you about us. We don't quit, and we don't make excuses.",
    },
    {
      title: "High Agency Only",
      description:
        "Platforms like CodeDay and Hack Club are great for beginners. But they lock organizers into rigid formats that don't deliver. We're building the alternative. Anyone can participate, but they'll be surrounded by people who actually want to ship, not just attend.",
    },
    {
      title: "Ship Real Products",
      description:
        "Workshops and hack nights that end with something shipped, not just something learned. Hackathons, dev squads, and launches, all student-run.",
    },
    {
      title: "Production Grade",
      description:
        "If the site goes down, 1500 people notice. We build real infrastructure, not just demos that look good for five minutes.",
    },
  ],
};

// Core Team - Top tier
const coreTeam: CoreTeamMember[] = [
  {
    id: 1,
    name: "SHREETHAN KAGITHA",
    role: "Fork Lead & Social Media",
    image: "/team/shreethan.jpg",
    mobileImagePosition: "center 18%",
    bio: "Bio coming soon...",
    expertise: [
      "Leadership",
      "Social Media Strategy",
    ],
    socials: {},
    accentColor: "var(--brand-purple)", // Deep Purple
    isFounder: true,
  },
  {
    id: 2,
    name: "MEGHANA PERADA",
    role: "Tech Lead",
    image: "/team/meghana.jpg",
    mobileImagePosition: "center 20%",
    bio: "Bio coming soon...",
    expertise: [
      "Tech Leadership",
      "Software Engineering",
    ],
    socials: {},
    accentColor: "var(--brand-pink)", // Vibrant Pink
    isFounder: true,
  },
];

// Volunteers - smaller cards section
const volunteers: Volunteer[] = [];

export default function About() {
  return (
    <>
      <main className="relative z-10 bg-transparent">
        <PageSection
          align="center"
          eyebrow="About"
          title={aboutContent.title}
          description={aboutContent.description}
          className="pt-20 md:pt-24 pb-8 md:pb-12"
        >
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4">
            {aboutContent.sections.map((section, index) => {
              // Define grid areas for each card
              const gridAreas = [
                "md:[grid-area:1/1/2/7]",
                "md:[grid-area:1/7/2/13]",
                "md:[grid-area:2/1/3/7]",
                "md:[grid-area:2/7/3/13]",
              ];
              return (
                <li key={section.title} className={gridAreas[index]}>
                  <GlowingCard animationDelay={index * 0.05}>
                    <div className="space-y-3">
                      <GlowingCardTitle>{section.title}</GlowingCardTitle>
                      <GlowingCardDescription>
                        {section.description}
                      </GlowingCardDescription>
                    </div>
                  </GlowingCard>
                </li>
              );
            })}
          </ul>
        </PageSection>

        <PageSection
          align="center"
          eyebrow="Team"
          title="Meet the Agents"
          description="Designers, engineers, club leads, and storytellers. The people behind everything."
          className="pt-8 md:pt-12 pb-24 md:pb-32"
        >
          <Suspense fallback={<LoadingInline />}>
            <TeamCaseStudy coreTeam={coreTeam} volunteers={volunteers} />
          </Suspense>
          <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-muted-foreground px-4 sm:px-0">
            *Roles stay flexible as our team and club grow.
          </p>
        </PageSection>
      </main>
    </>
  );
}
