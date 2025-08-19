import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return { ref, inView };
};

export const useStaggeredScrollAnimation = (delay = 200, threshold = 0.1) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return { ref, inView, delay };
};