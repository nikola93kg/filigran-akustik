import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('App routing', () => {
  it('renders the homepage booking CTA', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: /posalji upit/i })).toBeInTheDocument();
  });

  it('navigates to the contact page through the homepage CTA', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole('link', { name: /posalji upit/i }));

    expect(screen.getByText('Kontakt')).toBeInTheDocument();
  });
});
