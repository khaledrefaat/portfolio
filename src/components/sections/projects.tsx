import Image from 'next/image';
import { Card } from '../common/Card';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';

const projects = [
  {
    id: 1,
    title: 'Cash Clinic - Interactive Video Platform',
    description:
      'Cash Clinic is a financial education platform built around a fully custom interactive video learning experience.',
    features: [
      'Custom video player with sectioned navigation',
      'Embedded questions, notes, and interactive elements',
      'Video tracking with saved progress',
      'Navigate between videos or jump to specific timestamps',
      'Downloadable resources integrated into the player',
      'Custom drag-and-drop to reposition elements on the page',
      'Multi-language support',
    ],
    tech: [
      'Next.js',
      'TypeScript',
      'Zustand',
      'dnd-kit',
      'Framer Motion',
      'next-intl',
      'Zod',
      'React Hook Form',
      'Tailwind CSS',
    ],
    image: '/projects/cash-clinic.png',
  },
  {
    id: 2,
    title: 'Cr8 - Designer Marketplace Platform',
    description:
      'Cr8 is a marketplace platform for designers to upload, customize, and sell their products — similar to Redbubble. It features a custom mockup editor that uses 2D canvas and PSD smart object replacement to preview designs on products realistically.',
    features: [
      'Upload and manage design products',
      'Custom mockup editor using 2D canvas',
      'PSD smart object replacement for realistic product previews',
      'Designer store/profile management',
      'Customer-facing shop to browse and purchase designs',
      'Dashboard with analytics',
      'Multi-language support',
    ],
    tech: [
      'Next.js',
      'TypeScript',
      'Zustand',
      'TanStack Query',
      'ag-psd',
      'next-intl',
      'Zod',
      'React Hook Form',
      'Tailwind CSS',
    ],
    image: '/projects/cr8.png',
  },
];

export default function ProjectsSection() {
  return (
    <Section
      containerClassName="space-y-8"
      className="bg-secondary-background"
      id="projects"
    >
      <SectionHeader title="My Personal Playground" className="text-center" />

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden bg-linear-to-br from-foreground to-foreground/90 dark:from-black/90 dark:to-black border-0 text-white hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-6 p-8 items-center">
                {/* Image Placeholder */}
                <div className="flex items-center justify-center h-72">
                  <Image
                    src={project.image}
                    alt={project.title}
                    height={300}
                    width={300}
                    className="w-full h-full rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between gap-8">
                  <div>
                    <h3 className="text-4xl font-bold text-white font-raleway ">
                      {project.title}
                    </h3>
                    <p className="text-white/80 mt-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-white/80 before:content-['•'] before:mr-2"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 text-white text-xs rounded border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
