import * as nextNavigation from 'next/navigation';

import { fireEvent, render, screen } from '@/tests/test-utils';

import { Pagination } from './Pagination';

// mock de router.push
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn()
}));

describe('<Pagination />', () => {
  const pushMock = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();

    (nextNavigation.useRouter as jest.Mock).mockReturnValue({
      push: pushMock
    });

    (nextNavigation.useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams('page=2'));
  });

  it('should render pagination with correct buttons', () => {
    const { container } = render(<Pagination currentPage={2} totalPages={4} />);

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
    expect(screen.getByTestId('prev-button')).toBeInTheDocument();
    expect(screen.getByTestId('next-button')).toBeInTheDocument();

    for (let i = 1; i <= 4; i++) {
      expect(screen.getByTestId(`page-button-${i}`)).toBeInTheDocument();
    }

    expect(container).toMatchSnapshot();
  });

  it('should disable previous button when on first page', () => {
    render(<Pagination currentPage={1} totalPages={3} />);
    expect(screen.getByTestId('prev-button')).toBeDisabled();
    expect(screen.getByTestId('next-button')).not.toBeDisabled();
  });

  it('should disable next button when on last page', () => {
    render(<Pagination currentPage={3} totalPages={3} />);
    expect(screen.getByTestId('next-button')).toBeDisabled();
    expect(screen.getByTestId('prev-button')).not.toBeDisabled();
  });

  it('should highlight current page', () => {
    render(<Pagination currentPage={2} totalPages={5} />);
    expect(screen.getByTestId('page-button-2')).toHaveAttribute('aria-current', 'page');
  });

  it('should navigate to next page on next button click', () => {
    render(<Pagination currentPage={2} totalPages={5} />);
    fireEvent.click(screen.getByTestId('next-button'));
    expect(pushMock).toHaveBeenCalledWith('?page=3');
  });

  it('should navigate to previous page on previous button click', () => {
    render(<Pagination currentPage={2} totalPages={5} />);
    fireEvent.click(screen.getByTestId('prev-button'));
    expect(pushMock).toHaveBeenCalledWith('?');
  });

  it('should navigate to specific page on page button click', () => {
    render(<Pagination currentPage={1} totalPages={5} />);
    fireEvent.click(screen.getByTestId('page-button-4'));
    expect(pushMock).toHaveBeenCalledWith('?page=4');
  });
});
