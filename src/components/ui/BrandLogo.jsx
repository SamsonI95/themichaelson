import { cn } from "../../lib/utils";

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

export default function BrandLogo({
  size = "md",
  className,
  imageClassName,
  alt = "Michaelson logo",
}) {
  return (
    <span className={cn("inline-flex shrink-0 items-center justify-center", sizeClasses[size], className)}>
      <img
        src="/Logo.png"
        alt={alt}
        width="250"
        height="250"
        className={cn("h-full w-full object-contain", imageClassName)}
      />
    </span>
  );
}
