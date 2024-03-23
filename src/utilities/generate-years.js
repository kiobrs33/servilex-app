export const generateYears = () => {
  let yearsVal = [];

  let today = new Date();
  let yearInit = today.getFullYear();
  let yearFinal = today.getFullYear() + 25;

  for (let i = yearInit; i < yearFinal; i++) {
    yearsVal.push(i);
  }
  return yearsVal;
};
