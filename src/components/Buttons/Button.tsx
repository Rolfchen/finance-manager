import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  CircularProgress,
} from '@mui/material';

interface ButtonProps extends MuiButtonProps {
  isLoading?: boolean;
  loadingText?: string;
}

/**
 * Button component extends Mui Button with some additional convenience features.
 * @param param0
 * @returns
 */
const Button = ({
  isLoading = false,
  loadingText,
  children,
  ...parentButtonProps
}: ButtonProps) => {
  return (
    <MuiButton {...parentButtonProps}>
      {isLoading ? (
        <>
          <CircularProgress color="secondary" />
          {loadingText || ''}
        </>
      ) : (
        children
      )}
    </MuiButton>
  );
};

export default Button;
