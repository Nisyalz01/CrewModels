// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CrewModels title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CrewModels/i);
    expect(titleElement).toBeInTheDocument();
});
