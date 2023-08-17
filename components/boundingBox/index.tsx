import { classNames } from "@/util";

export default function BoundingBox({ children, className }: BoundingBoxProps) {
  return (
    <div className={classNames("max-w-7xl mx-auto", className)}>{children}</div>
  );
}

interface BoundingBoxProps {
  children: React.ReactNode;
  className?: string;
}
