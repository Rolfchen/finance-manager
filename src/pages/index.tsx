import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { NavBar } from '../components';
import ProtectedContentWrapper from '../components/ProtectedContentWrapper';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Personal Finance Manager</title>
      </Head>
      <main>
        <ProtectedContentWrapper>
          <NavBar />
          <Typography variant="h1">Welcome to the Base App</Typography>
        </ProtectedContentWrapper>
      </main>
    </div>
  );
};

export default Home;
