import React, { useEffect, useRef } from 'react';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';

// Styled components and imports removed/commented to avoid ESLint warnings

const Featured = () => {
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Some things I've built
      </h2>

      <div
        style={{
          textAlign: 'center',
          padding: '50px 20px',
          fontSize: 'var(--fz-xl)',
          color: 'var(--slate)',
        }}>
        <p>Still under construction, sorry!</p>
      </div>

      {/* Original project grid commented out */}
    </section>
  );
};

export default Featured;
