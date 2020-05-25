import React from 'react';
import { Tabs, Row, Col } from 'antd';

import ActiveCases from './components/ActiveCases';
import CaseTestRatio from './components/CaseTestRatio';
import DailyCases from './components/DailyCases';
import DailyLosses from './components/DailyLosses';
import DailyRecovery from './components/DailyRecovery';
import LossToCaseRatio from './components/LossToCaseRatio';
import TotalCases from './components/TotalCases';
import TotalLosses from './components/TotalLosses';
import TotalRecovery from './components/TotalRecovery';

import './App.css';


function App() {
  const { TabPane } = Tabs;

  return (
    <div className="App">
      <Tabs defaultActiveKey={1} >
        <TabPane tab="Toplam" key={1}>
          <Row>
            <Col xs={24} lg={12}>
              <ActiveCases />
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={12}>
              <TotalCases />
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={12}>
              <TotalLosses />
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={12}>
              <TotalRecovery />
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Günlük" key={2}>
          <Row>
            <Col xs={24} lg={12}>
              <DailyCases />
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={12}>
              <DailyLosses />
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={12}>
              <DailyRecovery />
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Oranlar" key={3}>
          <Row>
            <Col xs={24} lg={12}>
              <CaseTestRatio />
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={12}>
              <LossToCaseRatio />
            </Col>
          </Row>
        </TabPane>
      </Tabs>
      <p style={{ marginTop: 15 }}>Tüm veriler <a href="https://twitter.com/drfahrettinkoca">https://twitter.com/drfahrettinkoca</a> hesabından ve <a href="https://covid19.saglik.gov.tr/">https://covid19.saglik.gov.tr/</a> adresinden alınmıştır. Tamamı resmi veridir.</p>
      <p>Bu site, tüm verileri bir arada görebilmek konusunda kolaylık olması için hızlıca yapılmıştır. Herhangi resmi bir özelliği yoktur. Verilerin uyuşmaması durumunda (gözden kaçmış olabilir) kaynak olarak kullanılmamalıdır.</p>
      <p style={{ marginTop: 30 }}>Bu sitenin tüm koduna <a href="https://github.com/aakay/covid19veri">buradan</a> ulaşabilirsiniz.</p>
    </div >
  );
}

export default App;
