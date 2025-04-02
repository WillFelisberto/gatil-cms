import { render, screen } from '@/tests/test-utils';

import { Loader } from './Loader';

describe('<Loader />', () => {
  it('renders the icon (PawPrint)', () => {
    const { container } = render(<Loader />);
    expect(screen.getByTestId('paw-icon')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('does not render text when "text" prop is not provided', () => {
    render(<Loader />);
    const paragraph = screen.queryByText(/.+/);
    expect(paragraph).not.toBeInTheDocument();
  });

  it('renders text when "text" prop is provided', () => {
    const testText = 'Carregando gatinhos...';
    render(<Loader text={testText} />);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});
