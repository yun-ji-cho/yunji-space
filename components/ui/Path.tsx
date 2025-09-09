import { motion } from "motion/react";
import { COLORS } from "@/constants";

export default function Path(props: React.ComponentProps<typeof motion.path>) {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={COLORS.TEXT.SECONDARY}
      strokeLinecap="round"
      {...props}
    />
  );
}
