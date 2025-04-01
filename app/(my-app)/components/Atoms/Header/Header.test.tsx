import { fireEvent, render, screen } from '@testing-library/react';

import { Header } from './Header';

describe('<Header />', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('Should render the logo with correct alt text', () => {
    const logo = screen.getByTestId('logo');
    const header = screen.getByTestId('header');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('alt', 'Gatil dos Resgatados - Logo');

    expect(header).toMatchSnapshot();
  });

  it('Should render all desktop navigation links', () => {
    const labels = ['Início', 'Apadrinhe', 'Colabore', 'Contato', 'Projeto', 'Adote'];
    labels.forEach((label) => {
      const link = screen.getByTestId(`nav-link-${label.toLowerCase()}`);
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(label);
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

    fireEvent.click(menuButton); // open the mobile menu
    expect(screen.getByRole('menu')).toBeInTheDocument(); // menu is visible

    fireEvent.click(menuButton); // close the mobile menu
    expect(screen.queryByRole('menu')).not.toBeInTheDocument(); // menu is gone

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
