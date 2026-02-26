import Image from 'next/image';
import Button from '../common/Button';
import Section from '../common/Section';
import ChevronRight from '../icons/ChevronRight';

export default function hero() {
  return (
    <Section className="background pt-10 pb-20" containerClassName="space-y-12">
      <div className="relative w-max px-4 pt-4 mx-auto mt-30">
        <Image
          className="relative z-10"
          src="/test.png"
          alt="hero"
          width={180}
          height={180}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b rounded-xl from-[#FFF8ED] to-[#FFF8EF]" />
      </div>

      <div className="py-1 px-3 bg-secondary-background shadow-lg w-max mx-auto flex items-center gap-2 rounded-xl">
        <p className="bg-red-100 text-red-500 p-1 rounded-lg">Hey!</p>
        <p className="text-primary">
          <span className="text-gray-400">I'm</span> Khaled Refaat Elkady
        </p>
      </div>

      <h2 className="text-5xl max-w-[520px] font-bold mx-auto text-center font-raleway">
        I Build{' '}
        <span className="font-font-shadows-into-light-two font-medium">
          Full-Stack
        </span>{' '}
        Stuff That Actually Works!
      </h2>
      <p className="max-w-[520px] mx-auto text-xl">
        Debugging, refactoring, and the occasional spark of insight. I bridge
        the gap between rough ideas and polished software.
      </p>
      <Button className="flex items-center gap-1 mx-auto">
        Contact Me <ChevronRight />
      </Button>
    </Section>
  );
}
