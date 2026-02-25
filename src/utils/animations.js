
// Premium animation variants for high-end portfolio

// Enhanced fade up with 3D tilt
export const fadeUp3D = {
  hidden: { opacity: 0, y: 60, rotateX: 10, rotateY: 0 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0, 
    rotateY: 0,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.1
    } 
  }
}

// Enhanced fade in with subtle scale
export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
}

// Premium stagger container
export const staggerContainer = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.1,
      type: "spring",
      stiffness: 100,
      damping: 15
    } 
  }
}

// Premium hover variants with 3D tilt
export const hoverTilt = {
  whileHover: { 
    scale: 1.02,
    rotateX: -5,
    rotateY: 5,
    y: -8,
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    }
  },
  whileTap: { 
    scale: 0.98,
    rotateX: 0,
    rotateY: 0,
    transition: { 
      duration: 0.2,
      ease: "easeOut"
    }
  }
}

// Slide in from left with depth
export const slideInLeft = {
  hidden: { opacity: 0, x: -60, z: -100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    z: 0,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
}

// Slide in from right with depth
export const slideInRight = {
  hidden: { opacity: 0, x: 60, z: -100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    z: 0,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
}

// Timeline dot animation with pulse
export const timelineDot = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 20
    } 
  },
  pulse: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Floating animation for background elements
export const floating = {
  float: {
    y: [-10, 10, -10],
    x: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Glowing effect animation
export const glowPulse = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 1,
      ease: "easeOut"
    } 
  },
  pulse: {
    scale: [1, 1.05, 1],
    boxShadow: [
      "0 0 10px rgba(59, 130, 246, 0.3)",
      "0 0 30px rgba(59, 130, 246, 0.6)",
      "0 0 10px rgba(59, 130, 246, 0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Section reveal animation
export const sectionReveal = {
  hidden: { 
    opacity: 0, 
    y: 50,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 1,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
}

// Card flip animation
export const cardFlip = {
  hidden: { 
    opacity: 0, 
    rotateY: -90,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    rotateY: 0,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
}
