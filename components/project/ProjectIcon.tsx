import Image from "next/image";
import { renderIcon } from "@/utils/iconUtils";

interface ProjectIconProps {
  title: string;
  icon: string;
  gradient: string;
  imagePath?: string;
  isCompact?: boolean;
}

export default function ProjectIcon({
  title,
  icon,
  gradient,
  imagePath,
  isCompact = false,
}: ProjectIconProps) {
  const iconClasses = isCompact
    ? "w-full h-32 rounded-lg mb-3 flex items-center justify-center"
    : "w-full h-48 rounded-lg mb-4 flex items-center justify-center";

  return (
    <div className={`${iconClasses} ${gradient} relative overflow-hidden`}>
      {imagePath ? (
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className={isCompact ? "text-3xl" : "text-4xl"}>
          {renderIcon({
            name: icon,
            size: isCompact ? 32 : 48,
            className: "text-white",
          })}
        </div>
      )}
    </div>
  );
}
