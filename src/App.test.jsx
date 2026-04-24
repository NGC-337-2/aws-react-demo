import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App Component', () => {
  it('renders the welcome message', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { name: /Get started/i });

    expect(heading).toBeInTheDocument();
  });
});