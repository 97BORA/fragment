import { render, screen } from '@testing-library/react';

import App from './App';

test('renders app root', () => {
    render(<App />);

    expect(screen.getByText(/SplashScreen section/i)).toBeInTheDocument();
    expect(screen.getByText(/1 section/i)).toBeInTheDocument();
    expect(screen.getByText(/2 section/i)).toBeInTheDocument();
    expect(screen.getByText(/3 section/i)).toBeInTheDocument();
});
