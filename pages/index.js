import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import DailyCases from '../components/charts/DailyCases';
import DailyNewCases from '../components/charts/DailyNewCases';
import DailyLosses from '../components/charts/DailyLosses';

const Index = () => (
  <>
    <Head>
      <title>Covid-19 Türkiye Verileri</title>
      <link rel="icon" type="image/svg+xml" href="/img/favicon.ico" />
    </Head>
    <Layout>
      <DailyCases />
      <DailyLosses />
      <DailyNewCases />
    </Layout>
  </>
);

export default Index;