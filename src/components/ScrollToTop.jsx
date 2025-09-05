// src/components/ScrollToTop.jsx
// Policy:
// - PUSH/REPLACE (normal link clicks): smooth scroll to TOP
// - POP (Back/Forward): smooth RESTORE previous scroll
// - If URL has #hash: smooth scroll to that element
import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositions = new Map(); // pathname -> scrollY

function smoothScrollTo(targetY, duration = 1000) {
  // Respect reduced motion
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, targetY);
    return;
  }
  const startY = window.scrollY || 0;
  const delta = targetY - startY;
  const startTime = performance.now();
  const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2); // easeInOutQuad

  function step(now) {
    const p = Math.min(1, (now - startTime) / duration);
    const y = startY + delta * ease(p);
    window.scrollTo(0, y);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType(); // 'PUSH' | 'POP' | 'REPLACE'
  const prevPathRef = useRef(pathname);

  // Save the scroll position for the page we're leaving
  useEffect(() => {
    return () => {
      scrollPositions.set(prevPathRef.current, window.scrollY || 0);
      prevPathRef.current = pathname;
    };
  }, [pathname]);

  // Apply scroll behavior when path/hash changes
  useEffect(() => {
    // If navigating to a hash like /#contact, scroll to that element
    if (hash) {
      // wait a tick for the element to exist
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          const target = el.getBoundingClientRect().top + window.pageYOffset;
          smoothScrollTo(target, 1000);
        }
      }, 0);
      return;
    }

    if (navType === "POP") {
      // Back/forward: restore saved scroll
      const y = scrollPositions.get(pathname) ?? 0;
      smoothScrollTo(y, 1000);
    } else {
      // New navigation: go to top
      smoothScrollTo(0, 1000);
    }
  }, [pathname, hash, navType]);

  return null;
}
