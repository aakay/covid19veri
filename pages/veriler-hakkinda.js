import React from 'react';
import Header from '../components/Header'
import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <p>Tüm veriler <a href="https://twitter.com/drfahrettinkoca">https://twitter.com/drfahrettinkoca</a> hesabından ve <a href="https://covid19.saglik.gov.tr/">https://covid19.saglik.gov.tr/</a> adresinden alınmıştır. Tamamı resmi veridir.</p>
    <p>Bu site, tüm verileri bir arada görebilmek konusunda kolaylık olması için yapılmıştır. Herhangi resmi bir özelliği yoktur. Verilerin uyuşmaması durumunda (gözden kaçmış olabilir) kaynak olarak kullanılmamalıdır.</p>
  </Layout>
);

export default About;
