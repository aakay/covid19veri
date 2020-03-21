import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import Layout from '../components/Layout';
import DailyCases from '../components/charts/DailyCases';
import DailyNewCases from '../components/charts/DailyNewCases';
import DailyLosses from '../components/charts/DailyLosses';

const Index = () => (
  <Layout>
    <DailyCases />
    <DailyLosses />
    <DailyNewCases />
  </Layout>
);

export default Index;