import { Fragment } from 'react';
import Badge from '../common/Badge';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';

const categories = [
  {
    name: 'Languages',
    skills: ['JavaScript', 'TypeScript'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js'],
  },
  {
    name: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Drizzle', 'Prisma', 'Mongoose'],
  },
  {
    name: 'Tools & Tech',
    skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel'],
  },
];

export default function skills() {
  return (
    <Section
      containerClassName="space-y-8"
      className="bg-background"
      id="skills"
    >
      <SectionHeader title="My Skills & Stack" className="text-center" />

      <div className="grid grid-cols-[max-content_1fr] w-full lg:w-3xl mx-auto gap-y-6 gap-x-3 bg-secondary-background p-2 rounded-xl pb-4">
        <div className="bg-gray-50 dark:bg-gray-900 px-3 py-4 rounded-lg">
          <p className="text-sm font-bold">Categories</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 px-3 py-4 rounded-lg">
          <p className="text-sm font-bold">Tools & Tech</p>
        </div>

        {categories.map((category, index) => (
          <Fragment key={category.name}>
            <p className="text-xl text-gray-500 dark:text-gray-400 p-1">
              {category.name}
            </p>
            <div className="flex flex-wrap gap-2 p-1">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant={index === 0 ? 'primary' : 'default'}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {index !== categories.length - 1 && (
              <div className="col-span-2 w-full h-px bg-gray-200 dark:bg-gray-500" />
            )}
          </Fragment>
        ))}
      </div>
    </Section>
  );
}
