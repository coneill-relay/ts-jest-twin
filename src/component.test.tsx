import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './component';
import '@testing-library/jest-dom';
import "twin.macro";


describe('React Testing Library', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Button isSmall={false} variant="primary" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('loads and displays greeting', () => {
    const mockClick = jest.fn();
    render(
      <Button isSmall={false} variant="primary" onClick={mockClick}>
        Hello World
      </Button>
    );

    fireEvent.click(screen.getByText('Hello World'));

    expect(mockClick).toHaveBeenCalled();

    expect(screen.getByRole('button')).toHaveTextContent('Hello World');
    expect(screen.getByRole('button')).toBeEnabled();
  });
});