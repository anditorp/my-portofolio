// app/page.tsx
import { HeroSection } from "@/components/sections/hero";
import { ProjectsHeader } from "@/components/sections/projects-header";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import ContactCard from "@/components/sections/contact-card";
import { Suspense } from "react";
import { siteConfig } from "@/config/site.config";

export const metadata = {
  title: siteConfig.siteName,
  description: siteConfig.description || siteConfig.about,
};

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      {/* 1. Hero Section */}
      <section id="hero" className="relative">
        <HeroSection />
      </section>

      {/* 2. Projects Section */}
      <section
        id="projects"
        className="py-16 md:py-24 bg-background relative z-10"
      >
        <div className="mx-auto max-w-7xl px-6">
          <ProjectsHeader />

          <Suspense fallback={<ProjectsLoading />}>
            <ProjectsGrid />
          </Suspense>
        </div>
      </section>

      {/* 3. Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-24 bg-muted/30 relative z-10"
      >
        <div className="mx-auto max-w-4xl px-6">
          <ContactCard />
        </div>
      </section>
    </main>
  );
}

// Loading fallback for Projects (from previous version)
function ProjectsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-64 bg-muted/30 rounded-lg animate-pulse" />
      ))}
    </div>
  );
}
