import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function FadeInSection({ children, delay = 0  }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function SubTitleFadeIn({ children, delay = 0 }){
  return(
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}


export function AppearOnScroll({ children, threshold=0.3 }) {
  const [ref, inView] = useInView({
    triggerOnce: true, // l'animation ce joue un seule fois
    threshold: threshold, // l'animation se declenche a {threshold} de la hauteur de l'element
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}