import { render, screen } from '@/tests/test-utils';

import { Loader } from './Loader';

describe('<Loader />', () => {
  it('renders loader container and animation', () => {
    const { container } = render(<Loader />);
    expect(screen.getByTestId('loader-container')).toBeInTheDocument();
    expect(screen.getByTestId('loader-animation')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('does not render text when "text" prop is not provided', () => {
    render(<Loader />);
    expect(screen.queryByTestId('loader-text')).not.toBeInTheDocument();
  });

  it('renders text when "text" prop is provided', () => {
    const testText = 'Carregando gatinhos...';
    render(<Loader text={testText} />);
    const textElement = screen.getByTestId('loader-text');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent(testText);
  });

  it('has accessibility attributes for SEO and screen readers', () => {
    const { getByTestId } = render(<Loader />);
    const container = getByTestId('loader-container');
    expect(container).toHaveAttribute('role', 'status');
    expect(container).toHaveAttribute('aria-live', 'polite');
    expect(container).toHaveAttribute('aria-busy', 'true');
  });
});
