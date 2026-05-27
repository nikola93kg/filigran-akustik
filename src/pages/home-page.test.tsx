import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('App routing', () => {
  it('renders the homepage booking CTA', () => {
    render(<App />);
    expect(screen.getAllByRole('link', { name: /pošalji upit/i }).length).toBeGreaterThanOrEqual(1);
  });

  it('renders the hero headline', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Filigran Akustik/i })).toBeInTheDocument();
  });

  it('renders the band story section', () => {
    render(<App />);
    expect(screen.getByText(/muzika koja/i)).toBeInTheDocument();
  });

  it('renders the booking CTA section', () => {
    render(<App />);
    expect(screen.getByText(/rezervišite nastup/i)).toBeInTheDocument();
  });

  it('navigates to the contact page through the homepage CTA', async () => {
    const user = userEvent.setup();
    render(<App />);
    const ctaLinks = screen.getAllByRole('link', { name: /pošalji upit/i });
    await user.click(ctaLinks[0]);
    expect(screen.getAllByText('Kontakt').length).toBeGreaterThanOrEqual(1);
  });
});
