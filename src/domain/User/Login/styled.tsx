/**
 * Shared styles in the User/Login domain
 */

import styled from '@emotion/styled';
import { Button } from '@/components/Buttons';

export const UserFormContainer = styled.form`
  max-width: 800px;
  margin: auto;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: ${({ theme }) => `1px solid ${theme.palette.grey[400]}`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(3)};
  & button {
    min-height: 56px;
  }
`;

export const UserFormButton = styled(Button)`
  min-height: 56px;
`;
