interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

export function SectionTitle({ title, subtitle, className = '', center = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center flex flex-col items-center' : ''} ${className}`}>
      {/* Título Serifado */}
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
        {title}
      </h2>
      
      {/* Linha Decorativa */}
      <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-6"></div>
      
      {/* Subtítulo Descritivo */}
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}