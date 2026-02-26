import { cn } from '@/utils/utils';

export default function SectionHeader({
  title,
  subTitle,
  className = '',
}: {
  title: string;
  subTitle?: string;
  className?: string;
}) {
  if (!subTitle)
    return (
      <h2 className={cn('font-bold text-5xl font-raleway', className)}>
        {title}
      </h2>
    );

  return (
    <h2 className={cn('font-bold text-5xl leading-10 font-raleway', className)}>
      <span>{title}</span> <br />{' '}
      <span className="text-3xl text-gray-500">{subTitle}</span>
    </h2>
  );
}
