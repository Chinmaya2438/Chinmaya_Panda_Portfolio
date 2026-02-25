
// Fade up animation variant
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
}

// Fade in animation variant
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
}

// Stagger container for children animations
export const staggerContainer = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.1
    } 
  }
}

// Hover scale variant for interactive elements
export const hoverScale = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 }
}

// Slide in from left
export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
}

// Slide in from right
export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
}

// Timeline dot animation
export const timelineDot = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 260,
      damping: 20
    } 
  }
}