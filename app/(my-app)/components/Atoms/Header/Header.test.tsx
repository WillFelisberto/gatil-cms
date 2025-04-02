import { usePathname } from 'next/navigation';

import { fireEvent, render, screen } from '@/tests/test-utils';

import { Header } from './Header';

// 🧪 Mock do hook usePathname para simular path atual
jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  usePathname: jest.fn()
}));

const mockPathname = '/'; // Simula que está na home

const menuItems = [
  { label: 'Início', href: '/' },
  { label: 'Apadrinhe', href: '/apadrinhe' },
  { label: 'Colabore', href: '/colabore' },
  { label: 'Contato', href: '/contato' },
  { label: 'Projeto', href: '/projeto' },
  { label: 'Adote', href: '/adote' }
];

describe('<Header />', () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue(mockPathname);
    render(<Header menuItems={menuItems} />);
  });

  it('Should render the logo with correct alt text', () => {
    const logo = screen.getByTestId('logo');
    const header = screen.getByTestId('header');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('alt', 'Gatil dos Resgatados - Logo');
    expect(header).toMatchSnapshot();
  });

  it('Should render all desktop navigation links', () => {
    menuItems.forEach((item) => {
      const link = screen.getByTestId(`nav-link-${item.label.toLowerCase()}`);
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(item.label);
    });
  });

  it('Should render the mobile menu button', () => {
    const menuButton = screen.getByTestId('menu-button');
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-label', 'Abrir menu');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('Should open the mobile menu when the button is clicked', () => {
    const menuButton = screen.getByTestId('menu-button');
    fireEvent.click(menuButton);

    const mobileMenu = screen.getByRole('menu');
    expect(mobileMenu).toBeInTheDocument();

    const mobileLink = screen.getByTestId('mobile-link-início');
    expect(mobileLink).toBeInTheDocument();

    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    expect(menuButton).toHaveAttribute('aria-label', 'Fechar menu');
  });

  it('Should close the mobile menu when the button is clicked again', () => {
    const menuButton = screen.getByTestId('menu-button');

    fireEvent.click(menuButton); // open
    expect(screen.getByRole('menu')).toBeInTheDocument();

    fireEvent.click(menuButton); // close
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveAttribute('aria-label', 'Abrir menu');
  });

  it('Should highlight the active link with aria-current and correct class', () => {
    const activeLink = screen.getByTestId('nav-link-início');
    expect(activeLink).toHaveAttribute('aria-current', 'page');

    const span = activeLink.querySelector('span');
    expect(span).toHaveClass('text-blue-300');
  });
});
