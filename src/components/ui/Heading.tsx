import { cn } from "@/lib/utils";
interface HeadingProps {
  title: string;
  className?: string;
}

const Heading = ({ title, className }: HeadingProps) => {
  return (
    <h1 className={cn("text-2xl font-semibold text-left text-primary mb-4", className)}>
      {title}
    </h1>
  );
};

export default Heading;
