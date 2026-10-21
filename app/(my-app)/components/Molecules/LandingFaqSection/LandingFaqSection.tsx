'use client';

import { ArrowUpRight, Plus, X } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import type { LandingFaqItem } from '@/lib/landingContent';

type LandingFaqSectionProps = {
  eyebrow: string;
  title: string;
  titleEmphasis: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string | null;
  items: LandingFaqItem[];
  sectionId?: string;
};

export const LandingFaqSection = ({
  eyebrow,
  title,
  titleEmphasis,
  description,
  buttonLabel,
  buttonHref,
  items,
  sectionId
}: LandingFaqSectionProps) => {
  const visibleItems = useMemo(
    () => items.filter((item) => item.pergunta && item.resposta),
    [items]
  );

  const [openIndex, setOpenIndex] = useState<number | null>(visibleItems.length ? 0 : null);

  if (!visibleItems.length) return null;

  const external = Boolean(buttonHref && /^https?:\/\//.test(buttonHref));

  return (
    <section id={sectionId} className="gd-faq-section" aria-labelledby="gd-faq-title">
      <div className="gd-container gd-faq-grid">
        <div className="gd-faq-copy">
          <span className="gd-kicker">{eyebrow}</span>

          <h2 id="gd-faq-title">
            {title}
            <br />
            <em>{titleEmphasis}</em>
          </h2>

          <p>{description}</p>

          {buttonHref &&
            (external ? (
              <a
                href={buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="gd-button gd-button-outline"
              >
                {buttonLabel}
                <ArrowUpRight size={18} />
              </a>
            ) : (
              <Link href={buttonHref} className="gd-button gd-button-outline">
                {buttonLabel}
                <ArrowUpRight size={18} />
              </Link>
            ))}
        </div>

        <div className="gd-faq-list" data-testid="landing-faq-list">
          {visibleItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `landing-faq-answer-${index}`;
            const buttonId = `landing-faq-button-${index}`;

            return (
              <div
                className={`gd-faq-item ${isOpen ? 'gd-faq-item-open' : ''}`}
                key={`${item.pergunta}-${index}`}
              >
                <button
                  type="button"
                  className="gd-faq-trigger"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={isOpen ? answerId : undefined}
                  onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                  data-testid={`landing-faq-trigger-${index}`}
                >
                  <span>{item.pergunta}</span>

                  {isOpen ? (
                    <X size={20} aria-hidden="true" />
                  ) : (
                    <Plus size={20} aria-hidden="true" />
                  )}
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="gd-faq-answer"
                    data-testid={`landing-faq-answer-${index}`}
                  >
                    <p>{item.resposta}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
