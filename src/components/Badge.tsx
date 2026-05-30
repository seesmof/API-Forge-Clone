interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <div
      className={`outline outline-orange-200 bg-orange-50 rounded-full px-4 py-1 w-fit text-sm font-semibold text-orange-700 ${className}`}
    >
      {children}
    </div>
  );
}
