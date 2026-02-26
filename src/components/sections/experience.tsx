import Image from 'next/image';
import Link from 'next/link';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';

export default function experience() {
  return (
    <Section
      containerClassName="space-y-8"
      className="bg-secondary-background"
      id="experience"
    >
      <SectionHeader title="Where I've Worked" className="text-center" />
      <div className="shadow-lg border border-gray-200 dark:border-gray-600 rounded-lg w-full mx-auto space-y-6 relative">
        <div className="py-4 px-8">
          <h3 className="text-xl font-semibold font-raleway">
            Frontend Developer (Remotely)
          </h3>
          <p>Feb 2024 - Jan 2026</p>
          <ul className="space-y-4 mt-6">
            <ListItem>
              Developed responsive web applications using React.js, Next.js, Zod
              , TypeScript achieving seamless user experiences across devices.
            </ListItem>
            <ListItem>
              Collaborated with designers to create intuitive, accessible UI
              with Tailwind CSS, ensuring pixel-perfect implementation and
              smooth navigation.
            </ListItem>
            <ListItem>
              Optimized frontend performance by refining rendering techniques,
              reducing load times, and enhancing scalability.
            </ListItem>
            <ListItem>
              Engaged in Agile workflows, contributing to sprint planning,
              stand-ups, and code reviews using Git for version control.
            </ListItem>
            <ListItem>
              Created detailed frontend component and style guides, improving
              team collaboration and onboarding efficiency.
            </ListItem>
          </ul>
          <Image
            src="/award.png"
            height={24}
            width={24}
            className="absolute top-4 right-4"
            alt="award"
          />
        </div>

        <div className="w-full py-4 px-8 bg-gray-100 dark:bg-gray-600 flex items-center gap-3">
          <Link
            href="https://websight.kw/"
            target="_blank"
            className="flex items-center gap-3"
          >
            <Image
              src="websight.svg"
              height={50}
              width={50}
              alt="websight"
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-raleway dark:text-white">Websight</span>
              <span className="text-sm dark:text-white/80">Software house</span>
            </div>
          </Link>
        </div>
      </div>
    </Section>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-black/80 dark:text-white/80 before:content-['•'] before:mr-2">
      {children}
    </li>
  );
}
