import { Button } from '@mui/material';
import { NextPage } from 'next';
import usePageRequiresAuth from '../hooks/usePageRequiresAuth';
import { signOutUser } from '../utils';

const Secret: NextPage = () => {
  const { isAuthReady, user } = usePageRequiresAuth();

  return !isAuthReady || !user ? (
    <div>Loading...</div>
  ) : (
    <div>
      Welcome to the secret page
      <Button type="button" onClick={signOutUser}>
        Logout
      </Button>
    </div>
  );
};

export default Secret;
