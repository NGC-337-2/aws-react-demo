import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App Component', () => {
  it('renders the welcome message', () => {
    render(<App />);
    // Adjust this text to match what's in your <h1> in App.jsx
    const heading = screen.getByText(/Welcome to My Static Website/i); 
    expect(heading).toBeInTheDocument();
  });
});