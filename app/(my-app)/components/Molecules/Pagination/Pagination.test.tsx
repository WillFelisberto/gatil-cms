import { usePathname, useSearchParams } from 'next/navigation';

import { render, screen } from '@/tests/test-utils';

import { Pagination } from './Pagination';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn()
}));

const mockedUsePathname = usePathname as jest.Mock;
const mockedUseSearchParams = useSearchParams as jest.Mock;

const mockNavigation = (pathname = '/', search = 'page=2') => {
  mockedUsePathname.mockReturnValue(pathname);
  mockedUseSearchParams.mockReturnValue(new URLSearchParams(search));
};

describe('<Pagination />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockNavigation();
  });

  it('Should render pagination with correct links', () => {
    render(<Pagination currentPage={2} totalPages={4} />);

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
    expect(screen.getByTestId('prev-button')).toBeInTheDocument();
    expect(screen.getByTestId('next-button')).toBeInTheDocument();

    for (let page = 1; page <= 4; page++) {
      expect(screen.getByTestId(`page-button-${page}`)).toBeInTheDocument();
    }

    expect(
      screen.getByRole('navigation', {
        name: 'Paginação de gatinhos'
      })
    ).toBeInTheDocument();
  });

  it('Should not render pagination when totalPages is 1 or less', () => {
    const { rerender } = render(<Pagination currentPage={1} totalPages={1} />);

    expect(screen.queryByTestId('pagination')).not.toBeInTheDocument();

    rerender(<Pagination currentPage={1} totalPages={0} />);

    expect(screen.queryByTestId('pagination')).not.toBeInTheDocument();
  });

  it('Should hide previous link on first page', () => {
    render(<Pagination currentPage={1} totalPages={3} />);

    expect(screen.queryByTestId('prev-button')).not.toBeInTheDocument();

    expect(screen.getByTestId('next-button')).toBeInTheDocument();

    expect(document.querySelector('.gd-page-disabled')).toHaveAttribute('aria-hidden', 'true');
  });

  it('Should hide next link on last page', () => {
    render(<Pagination currentPage={3} totalPages={3} />);

    expect(screen.queryByTestId('next-button')).not.toBeInTheDocument();

    expect(screen.getByTestId('prev-button')).toBeInTheDocument();

    expect(document.querySelector('.gd-page-disabled')).toHaveAttribute('aria-hidden', 'true');
  });

  it('Should highlight the current page', () => {
    render(<Pagination currentPage={2} totalPages={5} />);

    const activePage = screen.getByTestId('page-button-2');

    expect(activePage).toHaveAttribute('aria-current', 'page');
    expect(activePage).toHaveClass('gd-page-current');

    const inactivePage = screen.getByTestId('page-button-3');

    expect(inactivePage).not.toHaveAttribute('aria-current');
    expect(inactivePage).not.toHaveClass('gd-page-current');
  });

  it('Should generate the correct next page link', () => {
    render(<Pagination currentPage={2} totalPages={5} />);

    const nextLink = screen.getByTestId('next-button');

    expect(nextLink).toHaveAttribute('href', '/?page=3#gatinhos');
    expect(nextLink).toHaveAttribute('aria-label', 'Próxima página');
  });

  it('Should generate the correct previous page link', () => {
    render(<Pagination currentPage={2} totalPages={5} />);

    const prevLink = screen.getByTestId('prev-button');

    expect(prevLink).toHaveAttribute('href', '/#gatinhos');
    expect(prevLink).toHaveAttribute('aria-label', 'Página anterior');
  });

  it('Should generate the correct link for a specific page', () => {
    render(<Pagination currentPage={2} totalPages={5} />);

    const pageLink = screen.getByTestId('page-button-4');

    expect(pageLink).toHaveAttribute('href', '/?page=4#gatinhos');
    expect(pageLink).toHaveAttribute('aria-label', 'Página 4');
  });

  it('Should preserve existing filters when changing pages', () => {
    mockNavigation('/', 'page=2&filter=adocao');

    render(<Pagination currentPage={2} totalPages={5} />);

    expect(screen.getByTestId('next-button')).toHaveAttribute(
      'href',
      '/?page=3&filter=adocao#gatinhos'
    );

    expect(screen.getByTestId('prev-button')).toHaveAttribute('href', '/?filter=adocao#gatinhos');
  });

  it('Should support custom pathname and anchor', () => {
    mockNavigation('/gatos', 'page=2');

    render(<Pagination currentPage={2} totalPages={5} anchor="catalogo" />);

    expect(screen.getByTestId('next-button')).toHaveAttribute('href', '/gatos?page=3#catalogo');

    expect(screen.getByTestId('prev-button')).toHaveAttribute('href', '/gatos#catalogo');
  });

  it('Should render ellipsis when there are many pages', () => {
    mockNavigation('/', 'page=6');

    render(<Pagination currentPage={6} totalPages={10} />);

    for (let page = 4; page <= 8; page++) {
      expect(screen.getByTestId(`page-button-${page}`)).toBeInTheDocument();
    }

    expect(screen.getByRole('link', { name: 'Página 1' })).toHaveAttribute('href', '/#gatinhos');

    expect(screen.getByRole('link', { name: 'Página 10' })).toHaveAttribute(
      'href',
      '/?page=10#gatinhos'
    );

    expect(document.querySelectorAll('.gd-page-dots')).toHaveLength(2);

    expect(screen.queryByTestId('page-button-3')).not.toBeInTheDocument();

    expect(screen.queryByTestId('page-button-9')).not.toBeInTheDocument();
  });

  it('Should show only the last ellipsis near the beginning', () => {
    mockNavigation('/', 'page=3');

    render(<Pagination currentPage={3} totalPages={10} />);

    for (let page = 1; page <= 5; page++) {
      expect(screen.getByTestId(`page-button-${page}`)).toBeInTheDocument();
    }

    expect(document.querySelectorAll('.gd-page-dots')).toHaveLength(1);

    expect(screen.getByRole('link', { name: 'Página 10' })).toHaveAttribute(
      'href',
      '/?page=10#gatinhos'
    );
  });
});
