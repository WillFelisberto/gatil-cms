'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page === 1) {
      params.delete('page');
    } else {
      params.set('page', page.toString());
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <nav
      className="flex gap-2 items-center flex-wrap justify-center mt-8"
      role="navigation"
      aria-label="Paginação de gatinhos"
      data-testid="pagination"
    >
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className="p-2 rounded-full border border-[#013274] text-[#013274] hover:bg-[#013274]/10 disabled:opacity-30 transition"
        aria-label="Página anterior"
        data-testid="prev-button"
      >
        <ArrowLeft className="w-4 h-4" />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`w-9 h-9 rounded-full border flex items-center justify-center transition font-medium ${
            page === currentPage
              ? 'bg-[#013274] text-white border-[#013274] shadow-md'
              : 'border-[#013274] text-[#013274] hover:bg-[#013274]/10'
          }`}
          aria-current={page === currentPage ? 'page' : undefined}
          aria-label={`Página ${page}`}
          data-testid={`page-button-${page}`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className="p-2 rounded-full border border-[#013274] text-[#013274] hover:bg-[#013274]/10 disabled:opacity-30 transition"
        aria-label="Próxima página"
        data-testid="next-button"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </nav>
  );
};
