import React from 'react';
import { Tabs, Row, Col } from 'antd';

import TotalCases from './components/TotalCases';
import TotalLosses from './components/TotalLosses';
import DailyCases from './components/DailyCases';
import DailyLosses from './components/DailyLosses';
import CaseTestRatio from './components/CaseTestRatio';
import LossToCaseRatio from './components/LossToCaseRatio';

import './App.css';

function App() {
  const { TabPane } = Tabs;

  return (
    <div className="App">
      <Tabs defaultActiveKey={1} >
        <TabPane tab="Toplam" key={1}>
          <Row>
            <Col xs={24} lg={12}>
              <div><TotalCases /></div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={12}>
              <div><TotalLosses /></div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Günlük" key={2}>
          <Row>
            <Col xs={24} lg={12}>
              <div><DailyCases /></div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={12}>
              <div><DailyLosses /></div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Oranlar" key={3}>
          <Row>
            <Col xs={24} lg={12}>
              <div><CaseTestRatio /></div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={12}>
              <div><LossToCaseRatio /></div>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
      <p>Tüm veriler <a href="https://twitter.com/drfahrettinkoca">https://twitter.com/drfahrettinkoca</a> hesabından ve <a href="https://covid19.saglik.gov.tr/">https://covid19.saglik.gov.tr/</a> adresinden alınmıştır. Tamamı resmi veridir.</p>
      <p>Bu site, tüm verileri bir arada görebilmek konusunda kolaylık olması için yapılmıştır. Herhangi resmi bir özelliği yoktur. Verilerin uyuşmaması durumunda (gözden kaçmış olabilir) kaynak olarak kullanılmamalıdır.</p>
    </div >
  );
}

export default App;
