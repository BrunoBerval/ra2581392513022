import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: LucideIcon;
  href?: string;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  icon: Icon, 
  href, 
  className = '',
  ...props 
}: ButtonProps) {
  
  // Base styles: Flexbox, padding, transições suaves e fonte Inter
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Variantes de estilo (Tema Corporate)
  const variants = {
    primary: "bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 border border-transparent",
    outline: "bg-transparent border-2 border-slate-200 text-slate-700 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-50",
    ghost: "bg-transparent text-slate-600 hover:text-blue-800 hover:bg-slate-100"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  // Se tiver href, é um Link. Se não, é um Botão.
  if (href) {
    return (
      <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer">
        {Icon && <Icon size={20} />}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
}