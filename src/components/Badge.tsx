interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <div className="outline outline-orange-200 bg-orange-50 rounded-full px-4 py-1 w-fit">
      {children}
    </div>
  );
}
