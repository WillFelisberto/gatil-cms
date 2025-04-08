import { render, screen } from '@/tests/test-utils';

import { Footer } from './Footer';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn()
}));

import { usePathname } from 'next/navigation';

describe('<Footer />', () => {
  const mockSocialLinks: { type: 'facebook' | 'instagram' | 'tiktok'; url: string }[] = [
    { type: 'facebook', url: 'https://facebook.com' },
    { type: 'instagram', url: 'https://instagram.com' },
    { type: 'tiktok', url: 'https://tiktok.com' }
  ];

  const mockMenuItems = [
    { label: 'Início', href: '/' },
    { label: 'Apadrinhe', href: '/apadrinhe' },
    { label: 'Contato', href: '/contato' }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the footer container', () => {
    (usePathname as jest.Mock).mockReturnValue('/');
    const { container } = render(
      <Footer socialLinks={mockSocialLinks} menuItems={mockMenuItems} />
    );
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('footer-container')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render all social media icons with correct hrefs', () => {
    (usePathname as jest.Mock).mockReturnValue('/');
    render(<Footer socialLinks={mockSocialLinks} menuItems={mockMenuItems} />);
    mockSocialLinks.forEach((_, index) => {
      const link = screen.getByTestId(`footer-social-link-${index}`);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', mockSocialLinks[index].url);
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  it('should render all menu items with correct labels and hrefs', () => {
    (usePathname as jest.Mock).mockReturnValue('/');
    render(<Footer socialLinks={mockSocialLinks} menuItems={mockMenuItems} />);
    mockMenuItems.forEach((item, index) => {
      const link = screen.getByTestId(`footer-menu-link-${index}`);
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(item.label);
      expect(link).toHaveAttribute('href', item.href);
    });
  });

  it('should mark the current page as active using pathname', () => {
    (usePathname as jest.Mock).mockReturnValue('/apadrinhe');
    render(<Footer socialLinks={mockSocialLinks} menuItems={mockMenuItems} />);
    const activeLink = screen.getByTestId('footer-menu-link-1');
    expect(activeLink).toHaveClass('text-primary-blue');
    expect(activeLink).toHaveClass('font-semibold');
    expect(activeLink).toHaveClass('underline');
  });

  it('should render default copyright', () => {
    (usePathname as jest.Mock).mockReturnValue('/');
    render(<Footer socialLinks={mockSocialLinks} menuItems={mockMenuItems} />);
    expect(screen.getByText(/feito com 😻 por/i)).toBeInTheDocument();
  });

  it('should render correctly even with empty props', () => {
    (usePathname as jest.Mock).mockReturnValue('/');
    render(<Footer socialLinks={[]} menuItems={[]} />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.queryByTestId('footer-social-link-0')).not.toBeInTheDocument();
    expect(screen.queryByTestId('footer-menu-link-0')).not.toBeInTheDocument();
  });
});
