import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({ title, subtitle, centered = true, className }: SectionHeaderProps) => {
  return (
    <div className={cn('mb-12 md:mb-16', centered && 'text-center', className)}>
      <h2 className="section-title" data-aos="fade-up">
        {title}
      </h2>
      {subtitle && (
        <p 
          className={cn('section-subtitle mt-4', centered && 'mx-auto')} 
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
