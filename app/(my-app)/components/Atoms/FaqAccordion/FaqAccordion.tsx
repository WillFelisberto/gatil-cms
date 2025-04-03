'use client';

import { ChevronDown, Minus } from 'lucide-react';
import { useState } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  faqs: FAQ[];
};

export const FAQAccordion = ({ faqs }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <dl
      className="max-w-4xl mx-auto mt-10 border border-gray-300 rounded overflow-hidden divide-y divide-gray-200"
      data-testid="faq-accordion"
    >
      {faqs.map((faq, index) => {
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
                <span className="font-medium text-[#013274] group-hover:underline">
                  {faq.question}
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
              <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
            </dd>
          </div>
        );
      })}
    </dl>
  );
};
