import { render, screen } from '@/tests/test-utils';

import { VolunteerCard } from './VolunteerCard';

describe('<VolunteerCard />', () => {
  const baseProps = {
    photo: 'https://example.com/photo.jpg',
    name: 'João Vítor',
    phone: '(11) 91234-5678'
  };

  it('should render the photo and name correctly', () => {
    const { container } = render(<VolunteerCard {...baseProps} showPhone />);

    expect(screen.getByTestId('volunteer-card')).toBeInTheDocument();
    const imgSrc = screen.getByAltText(`Foto de ${baseProps.name}`).getAttribute('src');
    const urlParams = new URLSearchParams(imgSrc?.split('?')[1]);
    const originalUrl = urlParams.get('url');

    expect(originalUrl).toBe('https://example.com/photo.jpg');
    expect(screen.getByText(baseProps.name)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render phone and WhatsApp link if showPhone is true', () => {
    render(<VolunteerCard {...baseProps} showPhone />);

    expect(screen.getByText('(11) 91234-5678')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://wa.me/5511912345678');
  });

  it('should not render phone or WhatsApp link if showPhone is false', () => {
    render(<VolunteerCard {...baseProps} showPhone={false} />);

    expect(screen.queryByText('(11) 91234-5678')).not.toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('should not render phone or WhatsApp link if phone is not provided', () => {
    render(<VolunteerCard photo={baseProps.photo} name={baseProps.name} showPhone />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.queryByText('(11) 91234-5678')).not.toBeInTheDocument();
  });

  it('should not render phone or link if neither phone nor showPhone is provided', () => {
    render(<VolunteerCard photo={baseProps.photo} name={baseProps.name} />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.queryByText('(11) 91234-5678')).not.toBeInTheDocument();
  });
});
