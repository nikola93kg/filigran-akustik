import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('application bootstrap', () => {
  it('loads the Tailwind entry stylesheet from main.tsx', () => {
    const mainSource = readFileSync(resolve(process.cwd(), 'src/main.tsx'), 'utf8');

    expect(mainSource).toContain("import './styles.css';");
  });

  it('defines the Tailwind base, components, and utilities layers', () => {
    const stylesSource = readFileSync(resolve(process.cwd(), 'src/styles.css'), 'utf8');

    expect(stylesSource).toContain('@tailwind base;');
    expect(stylesSource).toContain('@tailwind components;');
    expect(stylesSource).toContain('@tailwind utilities;');
  });
});
