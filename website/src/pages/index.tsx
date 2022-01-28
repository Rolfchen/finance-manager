import DashboardFrame from '@/domain/App/DashboardFrame';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Personal Finance Manager</title>
      </Head>
      <DashboardFrame loginMethod="redirect">
        <Typography variant="h1">Welcome to the Base App</Typography>
      </DashboardFrame>
    </div>
  );
};

export default Home;
