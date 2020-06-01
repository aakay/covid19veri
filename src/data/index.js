import march2020 from './202003';
import april2020 from './202004';
import may2020 from './202005';
import june2020 from './202005';

const rawData = [
  ...march2020,
  ...april2020,
  ...may2020,
  ...june2020
];

const data = rawData.map(entry => ({
  ...entry,
  dailyCaseToTestRatio: entry.tests ? entry.positive / entry.tests : null,
  totalCaseToTestRatio: entry.totalTests ? entry.cases / entry.totalTests : null,
  lossToCaseRatio: entry.cases ? entry.losses / entry.cases : null,
  active: entry.cases - entry.recovery - entry.losses
}));

export default data;
