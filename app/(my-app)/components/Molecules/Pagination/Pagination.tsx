'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

type PaginationProps = { currentPage: number; totalPages: number; anchor?: string };

export const Pagination = ({ currentPage, totalPages, anchor = 'gatinhos' }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hrefFor = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page <= 1) params.delete('page');
    else params.set('page', String(page));
    const query = params.toString();
    return `${pathname}${query ? `?${query}` : ''}#${anchor}`;
  };
  const first = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
  const last = Math.min(totalPages, first + 4);
  if (totalPages <= 1) return null;
  return (
    <nav className="gd-pagination" aria-label="Paginação de gatinhos" data-testid="pagination">
      {currentPage > 1 ? (
        <Link
          href={hrefFor(currentPage - 1)}
          aria-label="Página anterior"
          data-testid="prev-button"
        >
          <ArrowLeft size={18} />
        </Link>
      ) : (
        <span className="gd-page-disabled" aria-hidden="true">
          <ArrowLeft size={18} />
        </span>
      )}
      {first > 1 && (
        <>
          <Link href={hrefFor(1)} aria-label="Página 1">
            1
          </Link>
          <span className="gd-page-dots">…</span>
        </>
      )}
      {Array.from({ length: last - first + 1 }, (_, i) => first + i).map((page) => (
        <Link
          key={page}
          href={hrefFor(page)}
          aria-label={`Página ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
          className={page === currentPage ? 'gd-page-current' : ''}
          data-testid={`page-button-${page}`}
        >
          {page}
        </Link>
      ))}
      {last < totalPages && (
        <>
          <span className="gd-page-dots">…</span>
          <Link href={hrefFor(totalPages)} aria-label={`Página ${totalPages}`}>
            {totalPages}
          </Link>
        </>
      )}
      {currentPage < totalPages ? (
        <Link href={hrefFor(currentPage + 1)} aria-label="Próxima página" data-testid="next-button">
          <ArrowRight size={18} />
        </Link>
      ) : (
        <span className="gd-page-disabled" aria-hidden="true">
          <ArrowRight size={18} />
        </span>
      )}
    </nav>
  );
};
