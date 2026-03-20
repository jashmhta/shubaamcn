import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches an IntersectionObserver to add 'in-view' class
 * to elements with scroll-hidden / scroll-hidden-left / scroll-hidden-right / scroll-hidden-scale
 */
export function useScrollReveal(rootMargin = '0px 0px -80px 0px') {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const selectors = [
      '.scroll-hidden',
      '.scroll-hidden-left',
      '.scroll-hidden-right',
      '.scroll-hidden-scale',
    ].join(', ');

    const targets = document.querySelectorAll<HTMLElement>(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [rootMargin]);

  return containerRef;
}

/**
 * useNavScroll — hides nav on scroll down, shows on scroll up
 */
export function useNavScroll() {
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const topNav = document.getElementById('top-nav');
          const bottomNav = document.getElementById('bottom-nav');

          if (topNav) {
            // Add scrolled class after 50px
            if (currentY > 50) {
              topNav.classList.add('nav-scrolled');
            } else {
              topNav.classList.remove('nav-scrolled');
            }
            // Hide on scroll down, show on scroll up
            if (currentY > lastY && currentY > 120) {
              topNav.classList.add('nav-hidden-up');
            } else {
              topNav.classList.remove('nav-hidden-up');
            }
          }

          if (bottomNav) {
            if (currentY > lastY && currentY > 120) {
              bottomNav.classList.add('nav-hidden-down');
            } else {
              bottomNav.classList.remove('nav-hidden-down');
            }
          }

          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

/**
 * useCountUp — animates a number from 0 to target when element enters view
 */
export function useCountUp(target: number, duration = 2000) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const step = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target).toString();
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return ref;
}
