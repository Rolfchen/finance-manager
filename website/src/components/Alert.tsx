import { Alert as MuiAlert, AlertProps } from '@mui/material';

export interface ExtendedAlertProps extends AlertProps {}

const Alert = ({ children, ...alertProps }: ExtendedAlertProps) => {
  return <MuiAlert {...alertProps}>{children}</MuiAlert>;
};

export default Alert;
