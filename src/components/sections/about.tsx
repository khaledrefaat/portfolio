import Image from 'next/image';
import Button from '../common/Button';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import ChevronRight from '../icons/ChevronRight';

export default function about() {
  return (
    <Section
      containerClassName="grid grid-cols-2 gap-12"
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
          I'm a full-stack developer obsessed with building beautiful,
          functional software. I love solving complex problems and creating
          elegant solutions that scale.
        </p>
        <p className="text-lg">
          I like building things that scale, make sense, and don't break under
          pressure. Complex challenges? Bring 'em on—I eat problems for
          breakfast and deliver solutions by lunch.
        </p>
        <Button className="flex items-center gap-1 w-max">
          Contact Me <ChevronRight />
        </Button>
      </div>
    </Section>
  );
}
