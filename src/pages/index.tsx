import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My App</title>
      </Head>
      <main>
        <Typography variant="h1">Welcome to the Base App</Typography>
      </main>
    </div>
  );
};

export default Home;
