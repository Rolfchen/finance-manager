import styled from '@emotion/styled';
import theme from './theme';

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 1440px;
  padding: ${({ theme }) => theme.spacing(4)};
  ${theme.breakpoints.down('sm')} {
    padding: 0px;
  }
`;
