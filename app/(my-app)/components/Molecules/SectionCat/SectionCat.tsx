import type { ReactNode } from 'react';

interface SectionCatProps {
  dark?: boolean;
  children?: ReactNode;
  label?: string;
}

/** Content wrapper for CMS blocks. Avoid viewport-height sections on internal pages. */
export const SectionCat = ({ dark = false, children, label }: SectionCatProps) => (
  <section
    role="region"
    aria-label={label || 'Informações do Gatil dos Resgatados'}
    data-testid="section-cat-background"
    className={`gd-cms-feature ${dark ? 'gd-cms-feature-dark' : 'gd-cms-feature-light'}`}
  >
    <div className="gd-container">{children}</div>
  </section>
);
