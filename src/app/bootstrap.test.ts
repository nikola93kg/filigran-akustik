import { afterEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => {
  const renderMock = vi.fn();
  const createRootMock = vi.fn(() => ({ render: renderMock }));

  return { renderMock, createRootMock };
});

vi.mock('react-dom/client', () => ({
  default: {
    createRoot: mocks.createRootMock,
  },
}));

describe('application bootstrap', () => {
  afterEach(() => {
    document.head.innerHTML = '';
    document.body.innerHTML = '';
    mocks.renderMock.mockClear();
    mocks.createRootMock.mockClear();
    vi.resetModules();
  });

  it('mounts the app into the root element', async () => {
    document.body.innerHTML = '<div id="root"></div>';

    await import('../main');

    expect(mocks.createRootMock).toHaveBeenCalledWith(document.getElementById('root'));
    expect(mocks.renderMock).toHaveBeenCalledTimes(1);
  });
});
