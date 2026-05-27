import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('App composition', () => {
  it('delegates route definitions to the shared router module', () => {
    const appSource = readFileSync(resolve(process.cwd(), 'src/App.tsx'), 'utf8');

    expect(appSource).toContain('RouterProvider');
    expect(appSource).not.toContain('useInRouterContext');
    expect(appSource).not.toContain('<Routes>');
    expect(appSource).not.toContain('function AppRoutes');
  });
});
