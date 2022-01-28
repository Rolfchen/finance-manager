import React from 'react';
import { render, screen } from '@/testUtils';
import ProtectedContentWrapper from '../ProtectedContentWrapper';

describe('ProtectedContentWrapper', () => {
  it('can display children when the user state is ready', () => {
    render(
      <ProtectedContentWrapper>
        <h1>Children</h1>
      </ProtectedContentWrapper>
    );

    expect(
      screen.getByRole('heading', { name: 'Children' })
    ).toBeInTheDocument();
  });
});
