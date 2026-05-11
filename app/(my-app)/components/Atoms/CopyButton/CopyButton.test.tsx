import { fireEvent, render, screen } from '@/tests/test-utils';

import { CopyButton } from './CopyButton';

describe('<CopyButton />', () => {
  it('renders correctly with children', () => {
    const { container } = render(<CopyButton>Salvar</CopyButton>);
    expect(screen.getByText('Salvar')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('fires onClick when enabled', () => {
    const handleClick = jest.fn();
    render(<CopyButton onClick={handleClick}>Clique</CopyButton>);
    fireEvent.click(screen.getByText('Clique'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not fire onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <CopyButton disabled onClick={handleClick}>
        Desabilitado
      </CopyButton>
    );
    fireEvent.click(screen.getByText('Desabilitado'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies variant and size classes', () => {
    render(
      <CopyButton variant="secondary" size="lg">
        Classe
      </CopyButton>
    );
    const el = screen.getByText('Classe');
    // sinais mínimos para não ficar frágil
    expect(el).toHaveClass('bg-secondary');
    expect(el).toHaveClass('h-11');
  });

  it('merges extra className', () => {
    render(
      <CopyButton className="w-full" variant="outline" size="sm">
        Extra
      </CopyButton>
    );
    const el = screen.getByText('Extra');
    expect(el).toHaveClass('w-full');
    expect(el).toHaveClass('border'); // do outline
    expect(el).toHaveClass('h-9'); // size sm
  });
});
