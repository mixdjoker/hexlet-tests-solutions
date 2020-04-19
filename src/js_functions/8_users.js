// @ts-check
import _ from 'lodash';

/**
 * @param {any[]} params
 */
const takeOldest = (...params) => {
  const [users, usersReturnCount = 1] = params;
  const sortedByDateUsers = _.sortBy(users, [(user) => Date.parse(user.birthday)]);

  return sortedByDateUsers.slice(0, usersReturnCount);
};

export default takeOldest;
