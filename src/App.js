import React from 'react';

import TotalCases from './components/charts/TotalCases';
import TotalLosses from './components/charts/TotalLosses';
import DailyCases from './components/charts/DailyCases';
import DailyLosses from './components/charts/DailyLosses';
import CaseTestRatio from './components/charts/CaseTestRatio';
import LossToCaseRatio from './components/charts/LossToCaseRatio';

import './App.css';

function App() {
  return (
    <div className="App">
      <TotalCases />
      <TotalLosses />
      <DailyCases />
      <DailyLosses />
      <CaseTestRatio />
      <LossToCaseRatio />
      <p>Tüm veriler <a href="https://twitter.com/drfahrettinkoca">https://twitter.com/drfahrettinkoca</a> hesabından ve <a href="https://covid19.saglik.gov.tr/">https://covid19.saglik.gov.tr/</a> adresinden alınmıştır. Tamamı resmi veridir.</p>
      <p>Bu site, tüm verileri bir arada görebilmek konusunda kolaylık olması için yapılmıştır. Herhangi resmi bir özelliği yoktur. Verilerin uyuşmaması durumunda (gözden kaçmış olabilir) kaynak olarak kullanılmamalıdır.</p>
    </div>
  );
}

export default App;
