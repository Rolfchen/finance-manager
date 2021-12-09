import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('can show a loading state', () => {
    render(
      <Button isLoading={true} loadingText={'I am loading'}>
        My Button
      </Button>
    );

    expect(screen.queryByRole('button', { name: 'My Button' })).toBeNull();
    expect(
      screen.getByRole('button', { name: 'I am loading' })
    ).toBeInTheDocument();
  });
});
