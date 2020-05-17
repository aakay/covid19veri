const caseTexts = {
  dailyCaseToTestRatio: 'Günlük vaka/test oranı',
  totalCaseToTestRatio: 'Toplam vaka/test oranı'
}

export function getValueInPercent(value) {
  return `${Number.parseFloat(value * 100).toFixed(2)}%`;
};

export function getCaseText(name) {
  return caseTexts[name];
}