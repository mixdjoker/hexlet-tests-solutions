// @ts-check
import _ from 'lodash';

const getMenCountByYear = (inputUsers) => {
  const usersYearsCount = inputUsers
    .filter(({ gender }) => gender === 'male')
    .reduce((acc, { birthday }) => {
      const birthYear = birthday.slice(0, 4);
      if (_.has(acc, birthYear)) {
        acc[birthYear] += 1;
      } else {
        acc[birthYear] = 1;
      }
      return acc;
    }, {});
  return usersYearsCount;
};

export default getMenCountByYear;

// Review code:

// const getMenCountByYear = (users) => {
//   const men = users.filter(({ gender }) => gender === 'male');

//   const years = men.map(({ birthday }) => birthday.slice(0, 4));

//   return years.reduce((acc, year) => {
//     const count = _.get(acc, year, 0) + 1;
//     return { ...acc, [year]: count };
//   }, {});
// };
