import { render, screen } from '@/tests/test-utils';

import { VolunteerCard } from './VolunteerCard';

describe('<VolunteerCard />', () => {
  const mockProps = {
    photo: 'https://example.com/photo.jpg',
    name: 'João Vítor',
    phone: '(11) 91234-5678'
  };

  it('should render the photo, name, and phone correctly', () => {
    const { container } = render(<VolunteerCard {...mockProps} />);

    expect(screen.getByTestId('volunteer-card')).toBeInTheDocument();
    expect(screen.getByAltText(`Foto de ${mockProps.name}`)).toHaveAttribute(
      'src',
      mockProps.photo
    );
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.phone)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://wa.me/5511912345678');

    expect(container).toMatchSnapshot();
  });

  it('should not render phone or whatsapp icon if phone is not provided', () => {
    render(<VolunteerCard photo={mockProps.photo} name={mockProps.name} />);

    expect(screen.getByTestId('volunteer-card')).toBeInTheDocument();
    expect(screen.queryByText(mockProps.phone)).not.toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
