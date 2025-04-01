import { FaCat } from 'react-icons/fa';

import { fireEvent, render, screen } from '@/tests/test-utils';

import { Button } from './Button';

describe('<Button />', () => {
  it('Should renders with default props', () => {
    const { container } = render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('Should renders with light variant', () => {
    render(<Button variant="light">Light</Button>);
    const button = screen.getByRole('button', { name: /light/i });
    expect(button).toHaveClass('bg-blue-300');
    expect(button).toHaveClass('text-white');
  });

  it('Should renders with dark variant (default)', () => {
    render(<Button>Dark</Button>);
    const button = screen.getByRole('button', { name: /dark/i });
    expect(button).toHaveClass('bg-blue-950');
    expect(button).toHaveClass('text-white');
  });

  it('Should applies custom className', () => {
    render(<Button className="custom-class">With Class</Button>);
    const button = screen.getByRole('button', { name: /with class/i });
    expect(button).toHaveClass('custom-class');
  });

  it('Should renders an icon when provided', () => {
    render(<Button icon={<FaCat data-testid="cat-icon" />}>Icon</Button>);
    expect(screen.getByTestId('cat-icon')).toBeInTheDocument();
  });

  it('Should uses the correct button type when provided', () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('Should defaults to type="button" when no type is provided', () => {
    render(<Button>Default Type</Button>);
    const button = screen.getByRole('button', { name: /default type/i });
    expect(button).toHaveAttribute('type', 'button');
  });

  it('Should supports data-testid', () => {
    render(<Button data-testid="custom-btn">Testing</Button>);
    expect(screen.getByTestId('custom-btn')).toBeInTheDocument();
  });

  it('Should calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button', { name: /click/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Should renders children correctly', () => {
    render(<Button>Test Children</Button>);
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });
});
