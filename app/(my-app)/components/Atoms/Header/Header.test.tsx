import { usePathname } from 'next/navigation';

import { fireEvent, render, screen, within } from '@/tests/test-utils';

import { Header } from './Header';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn()
}));

const mockedUsePathname = usePathname as jest.Mock;

const menuItems = [
  { label: 'Início', href: '/' },
  { label: 'Gatinhos', href: '/#gatinhos' },
  { label: 'Nossa história', href: '/#projeto' },
  { label: 'Colabore', href: '/#colabore' },
  { label: 'Contato', href: '/#contato' }
];

const renderHeader = (donateButtonLabel?: string) =>
  render(<Header menuItems={menuItems} donateButtonLabel={donateButtonLabel} />);

describe('<Header />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedUsePathname.mockReturnValue('/');
  });

  it('Should render the header and logo correctly', () => {
    renderHeader();

    const header = screen.getByTestId('header');
    const logo = screen.getByTestId('logo');

    expect(header).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('alt', 'Logo Gatil dos Resgatados');

    const brandLink = screen.getByRole('link', {
      name: 'Gatil dos Resgatados — início'
    });

    expect(brandLink).toHaveAttribute('href', '/');
  });

  it('Should render desktop navigation without contact anchor', () => {
    renderHeader();

    const navigation = screen.getByRole('navigation', {
      name: 'Navegação principal'
    });

    menuItems
      .filter((item) => item.href !== '/#contato')
      .forEach((item) => {
        const link = within(navigation).getByRole('link', {
          name: item.label
        });

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', item.href);
      });

    expect(
      within(navigation).queryByRole('link', {
        name: 'Contato'
      })
    ).not.toBeInTheDocument();
  });

  it('Should render the donation button with default label', () => {
    renderHeader();

    const donateButton = screen.getByRole('link', {
      name: /Fazer uma doação/i
    });

    expect(donateButton).toBeInTheDocument();
    expect(donateButton).toHaveAttribute('href', '/#colabore');
    expect(donateButton).toHaveClass('gd-button-primary');
  });

  it('Should render a custom donation button label', () => {
    renderHeader('Ajude nossos gatos');

    const donateButton = screen.getByRole('link', {
      name: /Ajude nossos gatos/i
    });

    expect(donateButton).toBeInTheDocument();
    expect(donateButton).toHaveAttribute('href', '/#colabore');
  });

  it('Should render the mobile menu button closed initially', () => {
    renderHeader();

    const menuButton = screen.getByTestId('menu-button');

    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-label', 'Abrir menu');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveAttribute('aria-controls', 'gd-mobile-menu');

    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });

  it('Should open the mobile menu with all navigation links', () => {
    renderHeader();

    const menuButton = screen.getByTestId('menu-button');

    fireEvent.click(menuButton);

    const mobileMenu = screen.getByRole('navigation', {
      name: 'Navegação móvel'
    });

    expect(mobileMenu).toBeInTheDocument();
    expect(mobileMenu).toHaveAttribute('id', 'gd-mobile-menu');

    menuItems.forEach((item) => {
      const link = within(mobileMenu).getByRole('link', {
        name: item.label
      });

      expect(link).toHaveAttribute('href', item.href);
    });

    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    expect(menuButton).toHaveAttribute('aria-label', 'Fechar menu');
  });

  it('Should close the mobile menu when clicking the toggle again', () => {
    renderHeader();

    const menuButton = screen.getByTestId('menu-button');

    fireEvent.click(menuButton);

    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();

    fireEvent.click(menuButton);

    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();

    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveAttribute('aria-label', 'Abrir menu');
  });

  it('Should close the mobile menu when a link is clicked', () => {
    renderHeader();

    fireEvent.click(screen.getByTestId('menu-button'));

    const mobileMenu = screen.getByTestId('mobile-menu');

    const contactLink = within(mobileMenu).getByRole('link', {
      name: 'Contato'
    });

    fireEvent.click(contactLink);

    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();

    expect(screen.getByTestId('menu-button')).toHaveAttribute('aria-expanded', 'false');
  });

  it('Should highlight the active desktop navigation link', () => {
    renderHeader();

    const navigation = screen.getByRole('navigation', {
      name: 'Navegação principal'
    });

    const activeLink = within(navigation).getByRole('link', {
      name: 'Início'
    });

    expect(activeLink).toHaveAttribute('aria-current', 'page');
    expect(activeLink).toHaveClass('gd-nav-active');

    const inactiveLink = within(navigation).getByRole('link', {
      name: 'Gatinhos'
    });

    expect(inactiveLink).not.toHaveAttribute('aria-current');
    expect(inactiveLink).not.toHaveClass('gd-nav-active');
  });

  it('Should highlight the active link in the mobile menu', () => {
    renderHeader();

    fireEvent.click(screen.getByTestId('menu-button'));

    const activeLink = screen.getByTestId('mobile-link-início');

    expect(activeLink).toHaveAttribute('aria-current', 'page');
  });

  it('Should not highlight links when pathname does not match', () => {
    mockedUsePathname.mockReturnValue('/politica-de-adocao');

    renderHeader();

    const navigation = screen.getByRole('navigation', {
      name: 'Navegação principal'
    });

    const homeLink = within(navigation).getByRole('link', {
      name: 'Início'
    });

    expect(homeLink).not.toHaveAttribute('aria-current');
    expect(homeLink).not.toHaveClass('gd-nav-active');
  });
});
