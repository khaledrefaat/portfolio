import Image from 'next/image';
import Button from '../common/Button';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import ChevronRight from '../icons/ChevronRight';

export default function about() {
  return (
    <Section
      containerClassName="grid md:grid-cols-2 gap-12"
      className="bg-secondary-background"
      id="about"
    >
      <div className="w-full">
        <Image
          src="/study.jpg"
          height={500}
          width={500}
          alt="studying"
          className="rounded-xl object-cover h-[500px] w-full"
        />
      </div>
      <div className="space-y-6 flex flex-col justify-center">
        <SectionHeader title="A Bit About Me" subTitle="(& My Code)" />
        <p className="text-lg">
          I'm a frontend developer obsessed with building beautiful, fast, and
          pixel-perfect interfaces. I love turning complex UI challenges into
          smooth, elegant experiences that users actually enjoy.
        </p>
        <p className="text-lg">
          I like building things that feel right, look sharp, and perform under
          pressure. Complex interfaces? Bring 'em on — I eat design challenges
          for breakfast and ship polished frontends by lunch.
        </p>
        <Button className="flex items-center gap-1 w-max">
          Contact Me <ChevronRight />
        </Button>
      </div>
    </Section>
  );
}
