type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      {eyebrow && (
        <p className="text-xs tracking-widest uppercase text-rose-400 mb-4">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
