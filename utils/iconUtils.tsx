import * as Icons from "lucide-react";

export type IconName = keyof typeof Icons;

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export function renderIcon({ name, size = 24, className = "" }: IconProps) {
  // If the name is still an emoji, return it as a span for backward compatibility
  if (/\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}/u.test(name)) {
    return <span className={className} style={{ fontSize: size }}>{name}</span>;
  }

  // Render Lucide icon
  const IconComponent = Icons[name as IconName] as React.ComponentType<any>;
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Lucide React`);
    return <span className={className}>?</span>;
  }

  return <IconComponent size={size} className={className} />;
}