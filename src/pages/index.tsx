import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { NavBar } from '../components';
import ProtectedContentWrapper from '../components/ProtectedContentWrapper';
import { PageContainer } from '../styles/layout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Personal Finance Manager</title>
      </Head>

      <ProtectedContentWrapper loginMethod="redirect">
        <NavBar />
        <PageContainer as="main">
          <Typography variant="h1">Welcome to the Base App</Typography>
        </PageContainer>
      </ProtectedContentWrapper>
    </div>
  );
};

export default Home;
