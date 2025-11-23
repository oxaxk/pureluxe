
interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  href
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer whitespace-nowrap';
  
  const variants = {
    primary: 'bg-[#CDB8A6] text-[#2E2A27] hover:bg-[#A08163] shadow-md hover:shadow-lg border border-[#CDB8A6]',
    secondary: 'bg-white text-[#2E2A27] border border-[#CDB8A6] hover:bg-[#F5EDE7]',
    outline: 'border border-[#A08163] text-[#2E2A27] hover:bg-[#E5D8CC]'
  };
  
  const sizes = {
    sm: 'px-5 py-2.5 text-sm rounded-full',
    md: 'px-7 py-3.5 text-base rounded-full',
    lg: 'px-9 py-4 text-lg rounded-full'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
