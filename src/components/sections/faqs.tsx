import Image from 'next/image';
import Link from 'next/link';
import Accordion from '../common/Accordion';
import Section from '../common/Section';

const faqs = [
  {
    id: '1',
    question: 'What kind of projects do you usually work on?',
    answer:
      'I mostly work on web apps and e-commerce platforms — dashboards, marketplaces, SaaS products. I also have experience with React Native mobile apps, though my main focus is web. I enjoy projects that have complex UI and real product depth to them.',
  },
  {
    id: '2',
    question: 'Do you like working with project planning and architecture?',
    answer:
      'Yes, and I take it seriously. I start by going deep into the Figma designs and asking questions to make sure I fully understand the business logic before writing a single line of code. I identify the right technologies for the job and use tools like Stately to map out the most important flows and states in the app. I find that this upfront thinking saves a lot of pain later.',
  },
  {
    id: '3',
    question: 'Can you handle both front and backend work?',
    answer:
      'Yes — I work as a full-stack developer, but I am frontend heavy. I can build and maintain APIs and handle backend logic when needed, but my strongest work and deepest experience is on the frontend, building solid, performant, and well-structured user interfaces.',
  },
  {
    id: '4',
    question: 'How do you approach learning new technologies?',
    answer:
      'If it is a completely new concept, I start with a Frontend Masters course — they are focused, practical, and give me the right mental model quickly. After that, I jump straight into building projects and use the official docs as my reference along the way. I find that learning and building at the same time is what makes things actually stick.',
  },
  {
    id: '5',
    question: 'How soon can you start?',
    answer:
      'I am currently available and ready to start immediately. I recently finished my previous role and I am fully focused on finding the right next opportunity.',
  },
  {
    id: '6',
    question: 'How do you usually work within a team?',
    answer:
      'I adapt well to however the team works — whether that is regular syncs or async communication. I have worked with tools like Asana to manage tasks and stay aligned with the team. When it comes to feedback, I take it seriously, think it through, and focus on what is best for the product and the business rather than personal preference.',
  },
];

export default function FaqsSection() {
  return (
    <Section
      containerClassName="flex flex-col md:flex-row items-start gap-8"
      id="faqs"
    >
      <div className="shadow-lg border border-gray-300 dark:border-gray-600 rounded-lg flex-9">
        <div className="w-2/3 mx-auto space-y-5 py-8">
          <Image
            src="/me.jpeg"
            alt="faq"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h2 className="text-center font-raleway text-xl">
            Got a question? Let's chat.
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400">
            I'm just a message away. Whether it's a bug, a collab, or just to
            say hi.
          </p>
          <IconItem
            src="/gmail.png"
            alt="gmail"
            description="Send me an email."
            href="mailto:khaledrefaat08@gmail.com"
          />
          <IconItem
            src="/whatsapp.png"
            alt="whatsapp"
            description="Text me on whatsapp."
            href="https://wa.me/201062715774"
          />
        </div>
      </div>
      <div className="flex-10">
        <Accordion items={faqs} allowMultiple={true} />
      </div>
    </Section>
  );
}

function IconItem({
  src,
  alt,
  description,
  href,
}: {
  src: string;
  alt: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center gap-x-2 bg-secondary-background py-2 rounded-lg"
      target="blank"
    >
      <Image src={src} alt={alt} width={25} height={25} />
      <p>{description}</p>
    </Link>
  );
}
