import type { BlockProps } from '@/app/(my-app)/types/block-props';
import { render, screen } from '@/tests/test-utils';

import { TitleBlock } from './TitleBlock';

const defaultProps: BlockProps<'title'> = {
  text: 'Título Teste',
  tag: 'h2',
  alignment: 'left',
  blockType: 'title'
};

describe('<TitleBlock />', () => {
  it('Should renders with default h2 tag and text', () => {
    const { container } = render(<TitleBlock {...defaultProps} />);
    const el = screen.getByTestId('title-block');
    expect(el).toBeInTheDocument();
    expect(el.tagName.toLowerCase()).toBe('h2');
    expect(el).toHaveTextContent('Título Teste');

    expect(container).toMatchSnapshot();
  });

  it('Should renders with custom tag (h3)', () => {
    render(<TitleBlock {...defaultProps} tag="h3" />);
    const el = screen.getByTestId('title-block');
    expect(el.tagName.toLowerCase()).toBe('h3');
  });

  it('Should applies correct alignment classes', () => {
    render(<TitleBlock {...defaultProps} alignment="right" />);
    const el = screen.getByTestId('title-block');
    expect(el).toHaveClass('text-right');
    expect(el).toHaveClass('justify-end');
  });

  it('Should renders the icon when showIcon is true', () => {
    render(<TitleBlock {...defaultProps} showIcon />);
    expect(screen.getByTestId('title-icon')).toBeInTheDocument();
  });

  it('Should does not render the icon when showIcon is false', () => {
    render(<TitleBlock {...defaultProps} showIcon={false} />);
    expect(screen.queryByTestId('title-icon')).not.toBeInTheDocument();
  });

  it('Should sets the id attribute if provided', () => {
    render(<TitleBlock {...defaultProps} id="titulo-id" />);
    const el = screen.getByTestId('title-block');
    expect(el).toHaveAttribute('id', 'titulo-id');
  });
});
