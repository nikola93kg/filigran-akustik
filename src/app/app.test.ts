import { render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it } from 'vitest';

afterEach(() => {
  window.history.pushState({}, '', '/');
});

describe('App routing', () => {
  it('renders the band page when the browser is on the band route', async () => {
    window.history.pushState({}, '', '/bend');

    const { default: App } = await import('../App');

    render(React.createElement(App));

    expect(screen.getByText('Bend')).toBeInTheDocument();
  });
});
