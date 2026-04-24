import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App Component', () => {
  it('renders the welcome message', () => {
    render(<App />);
    
    // Use a regex or partial text to be safe
    const heading = screen.getByText(/Welcome to My Static Website/i); 
    
    expect(heading).toBeInTheDocument();
  });
});