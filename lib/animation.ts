import type { Variants } from "motion/react";
import { ANIMATION } from "@/constants";

export const revealVariants: Variants = {
  open: {
    clipPath: `circle(${ANIMATION.MOBILE_MENU.CIRCLE_SIZE.OPEN} at ${ANIMATION.MOBILE_MENU.CIRCLE_POSITION})`,
    transition: ANIMATION.MOBILE_MENU.SPRING.OPEN,
  },
  closed: {
    clipPath: `circle(${ANIMATION.MOBILE_MENU.CIRCLE_SIZE.CLOSED} at ${ANIMATION.MOBILE_MENU.CIRCLE_POSITION})`,
    transition: ANIMATION.MOBILE_MENU.SPRING.CLOSED,
  },
};

export const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: ANIMATION.MOBILE_MENU.ITEM.SPRING,
    },
  },
  closed: {
    y: ANIMATION.MOBILE_MENU.ITEM.Y_OFFSET,
    opacity: 0,
    transition: {
      y: { stiffness: ANIMATION.MOBILE_MENU.ITEM.SPRING.stiffness },
    },
  },
};
