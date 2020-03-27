import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import TotalCases from '../components/charts/TotalCases';
import DailyCases from '../components/charts/DailyCases';
import TotalLosses from '../components/charts/TotalLosses';
import DailyLosses from '../components/charts/DailyLosses';
import CaseTestRatio from '../components/charts/CaseTestRatio';
import LossToCaseRatio from '../components/charts/LossToCaseRatio';

const Index = () => (
  <>
    <Head>
      <title>Covid-19 Türkiye Verileri</title>
      <link rel="icon" type="image/svg+xml" href="/img/favicon.ico" />
    </Head>
    <Layout>
      <TotalCases />
      <TotalLosses />
      <DailyCases />
      <DailyLosses />
      <CaseTestRatio />
      <LossToCaseRatio />
    </Layout>
  </>
);

export default Index;