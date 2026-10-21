import { footerDefaults } from '@/lib/landingContent';
import { render, screen } from '@/tests/test-utils';

import { Footer } from './Footer';

type SocialLink = {
  type: 'facebook' | 'instagram' | 'tiktok';
  url: string;
};

const mockSocialLinks: SocialLink[] = [
  { type: 'facebook', url: 'https://facebook.com/gatil' },
  { type: 'instagram', url: 'https://instagram.com/gatil' },
  { type: 'tiktok', url: 'https://tiktok.com/@gatil' }
];

const mockMenuItems = [
  { label: 'Início', href: '/' },
  { label: 'Gatinhos', href: '/#gatinhos' },
  { label: 'Colabore', href: '/#colabore' },
  { label: 'Contato', href: '/#contato' }
];

const renderFooter = (props: Partial<React.ComponentProps<typeof Footer>> = {}) =>
  render(<Footer socialLinks={mockSocialLinks} menuItems={mockMenuItems} {...props} />);

describe('<Footer />', () => {
  it('Should render the footer and logo correctly', () => {
    renderFooter();

    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('footer-container')).toBeInTheDocument();

    const logo = screen.getByAltText('Gatil dos Resgatados');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', expect.stringContaining('logo-gatil-rodape.png'));

    expect(logo.closest('a')).toHaveAttribute('href', '/');
  });

  it('Should render the default CMS labels', () => {
    renderFooter();

    expect(screen.getByText(footerDefaults.about)).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: footerDefaults.exploreTitle
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: footerDefaults.infoTitle
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: footerDefaults.contactTitle
      })
    ).toBeInTheDocument();

    expect(screen.getByText(footerDefaults.contactDescription)).toBeInTheDocument();

    expect(screen.getByText(footerDefaults.location)).toBeInTheDocument();
  });

  it('Should render custom labels from Payload CMS', () => {
    const customLabels = {
      ...footerDefaults,
      about: 'Resgatamos gatos e transformamos vidas.',
      exploreTitle: 'Navegação',
      infoTitle: 'Informações importantes',
      contactTitle: 'Entre em contato',
      contactDescription: 'Estamos aqui para ajudar.',
      location: 'Sombrio - SC',
      contactButton: 'Apoie nosso projeto',
      copyright: 'Gatil dos Resgatados',
      closingPhrase: 'Feito com amor pelos animais'
    };

    renderFooter({ labels: customLabels });

    expect(screen.getByText(customLabels.about)).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: customLabels.exploreTitle
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: customLabels.contactTitle
      })
    ).toBeInTheDocument();

    expect(screen.getByText(customLabels.contactDescription)).toBeInTheDocument();

    expect(screen.getByText(customLabels.location)).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: customLabels.contactButton
      })
    ).toHaveAttribute('href', '/#colabore');

    expect(
      screen.getByText(`© ${new Date().getFullYear()} ${customLabels.copyright}`)
    ).toBeInTheDocument();

    expect(screen.getByText(customLabels.closingPhrase)).toBeInTheDocument();
  });

  it('Should render all social media links correctly', () => {
    renderFooter();

    mockSocialLinks.forEach((social, index) => {
      const link = screen.getByTestId(`footer-social-link-${index}`);

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', social.url);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');

      expect(link).toHaveAttribute('aria-label', `Visitar ${social.type}`);
    });
  });

  it('Should ignore social media links without URL', () => {
    renderFooter({
      socialLinks: [
        { type: 'facebook', url: '' },
        {
          type: 'instagram',
          url: 'https://instagram.com/gatil'
        }
      ]
    });

    const socialLink = screen.getByTestId('footer-social-link-0');

    expect(socialLink).toHaveAttribute('href', 'https://instagram.com/gatil');

    expect(screen.queryByTestId('footer-social-link-1')).not.toBeInTheDocument();
  });

  it('Should render all navigation links correctly', () => {
    renderFooter();

    mockMenuItems.forEach((item, index) => {
      const link = screen.getByTestId(`footer-menu-link-${index}`);

      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(item.label);
      expect(link).toHaveAttribute('href', item.href);
    });
  });

  it('Should render adoption and sponsorship policy links', () => {
    renderFooter();

    const adoptionLink = screen.getByRole('link', {
      name: footerDefaults.adoptionPolicyLabel
    });

    const sponsorshipLink = screen.getByRole('link', {
      name: footerDefaults.sponsorshipTermsLabel
    });

    expect(adoptionLink).toHaveAttribute('href', '/politica-de-adocao');

    expect(sponsorshipLink).toHaveAttribute('href', '/termos-de-apadrinhamento');
  });

  it('Should render contact and donation links', () => {
    renderFooter();

    const contactLinks = screen.getAllByRole('link', {
      name: footerDefaults.contactLabel
    });

    expect(contactLinks.some((link) => link.getAttribute('href') === '/#contato')).toBe(true);

    const donationLink = screen.getByRole('link', {
      name: footerDefaults.contactButton
    });

    expect(donationLink).toHaveAttribute('href', '/#colabore');
    expect(donationLink).toHaveClass('gd-button-light');
  });

  it('Should normalize a Brazilian WhatsApp number', () => {
    const whatsapp = '+55 (48) 99999-1234';

    renderFooter({ whatsapp });

    const whatsappLink = screen.getByText(whatsapp).closest('a');

    expect(whatsappLink).toBeInTheDocument();
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/5548999991234');
    expect(whatsappLink).toHaveAttribute('target', '_blank');
    expect(whatsappLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('Should accept WhatsApp numbers without country code', () => {
    renderFooter({ whatsapp: '48999991234' });

    const whatsappLink = screen.getByText('48999991234').closest('a');

    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/5548999991234');
  });

  it('Should not render WhatsApp link when number is empty', () => {
    const { container } = renderFooter({
      whatsapp: ''
    });

    expect(container.querySelector('a[href^="https://wa.me/"]')).not.toBeInTheDocument();
  });

  it('Should render the current year and default copyright', () => {
    renderFooter();

    const currentYear = new Date().getFullYear();

    expect(screen.getByText(`© ${currentYear} ${footerDefaults.copyright}`)).toBeInTheDocument();

    expect(screen.getByText(footerDefaults.closingPhrase)).toBeInTheDocument();
  });

  it('Should render correctly with empty arrays', () => {
    renderFooter({
      socialLinks: [],
      menuItems: [],
      whatsapp: undefined
    });

    expect(screen.getByTestId('footer')).toBeInTheDocument();

    expect(screen.queryByTestId('footer-social-link-0')).not.toBeInTheDocument();

    expect(screen.queryByTestId('footer-menu-link-0')).not.toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: footerDefaults.adoptionPolicyLabel
      })
    ).toBeInTheDocument();
  });
});
