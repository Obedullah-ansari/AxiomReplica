type PillButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const PillButton = ({ children, className }: PillButtonProps) => {
  return (
    <button
      className={`flex items-center gap-2 h-8 !px-3 rounded-full border border-gray-800 hover:bg-nav-hover transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default PillButton;
