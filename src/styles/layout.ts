import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import theme from './theme';

interface PageContainerProps {
  withNavigation?: boolean;
  theme?: Theme;
}

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 1440px;
  margin: auto;
  padding: ${({ theme, withNavigation = true }: PageContainerProps) =>
    theme?.spacing(withNavigation ? 8 : 4, 4, 4, 4)};
  ${theme.breakpoints.down('sm')} {
    padding: 0px;
  }
`;
