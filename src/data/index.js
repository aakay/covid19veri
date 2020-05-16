import march2020 from './202003';
import april2020 from './202004';
import may2020 from './202005';

const rawData = [
  ...march2020,
  ...april2020,
  ...may2020
];

const data = rawData.map(entry => ({
  ...entry,
  caseToTestRatio: entry.tests ? entry.positive / entry.tests : null,
  lossToCaseRatio: entry.cases ? entry.losses / entry.cases : null
}));

export default data;
