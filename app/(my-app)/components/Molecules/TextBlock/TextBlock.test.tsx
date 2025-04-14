import { BlockProps } from '@/app/(my-app)/types/block-props';
import { render, screen } from '@/tests/test-utils';

import { TextBlock } from './TextBlock';

const defaultProps: BlockProps<'textBlock'> = {
  content: {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      direction: 'ltr',
      children: [
        {
          type: 'paragraph',
          version: 1,
          indent: 0,
          format: '',
          direction: 'ltr',
          children: [
            {
              type: 'text',
              version: 1,
              text: 'Homepage',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: ''
            }
          ]
        }
      ]
    }
  },
  blockType: 'textBlock'
};

describe('<TextBlock />', () => {
  it('Should renders the rich text content', () => {
    const { container } = render(<TextBlock {...defaultProps} />);
    expect(screen.getByText('Homepage')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
