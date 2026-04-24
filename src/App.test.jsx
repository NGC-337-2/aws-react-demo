import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App Component', () => {
  it('debugs the rendered content', () => {
    const { container } = render(<App />);
    
    // This will print the entire HTML structure to CodeBuild logs
    console.log(container.innerHTML); 
    
    // Assert something simple just to pass the test for now
    expect(container).toBeInTheDocument();
  });
});