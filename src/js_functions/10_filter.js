// @ts-check

/**
 * @param {any} inputUsers
 */
const getGirlFriends = (inputUsers) => {
  const girls = inputUsers.map(({ friends }) => friends)
    .flat().filter(({ gender }) => gender === 'female');

  return girls;
};

export default getGirlFriends;
