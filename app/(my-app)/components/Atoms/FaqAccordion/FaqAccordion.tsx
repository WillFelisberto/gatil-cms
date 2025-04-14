'use client';

import { ChevronDown, Minus } from 'lucide-react';
import { useState } from 'react';

import { BlockProps } from '@/app/(my-app)/types/block-props';

export const FAQAccordion = (props: BlockProps<'faq'>) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { faq } = props;

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <dl
      className="max-w-4xl mx-auto mt-10 border border-gray-300 rounded overflow-hidden divide-y divide-gray-200"
      data-testid="faq-accordion"
    >
      {faq &&
        faq.map((faq, index) => {
          const isOpen = index === openIndex;
          const answerId = `faq-answer-${index}`;
          const questionId = `faq-question-${index}`;

          return (
            <div key={index}>
              <dt>
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left px-6 py-4 hover:bg-gray-50 transition group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  id={questionId}
                  data-testid={`faq-question-${index}`}
                >
                  <span className="font-medium text-base text-[#013274] group-hover:underline">
                    {faq.pergunta}
                  </span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-[#013274]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#013274]" />
                  )}
                </button>
              </dt>
              <dd
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                className={`transition-all duration-300 overflow-hidden px-6 ${
                  isOpen ? 'max-h-40 pb-6' : 'max-h-0 pb-0'
                }`}
                data-testid={`faq-answer-${index}`}
              >
                <p className="text-gray-700 text-base text-justify leading-relaxed">
                  {faq.resposta}
                </p>
              </dd>
            </div>
          );
        })}
    </dl>
  );
};
