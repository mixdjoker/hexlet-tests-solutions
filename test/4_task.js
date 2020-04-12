// @ts-check

import getIn from '../src/js_object/4_object.js';

export default () => {
  const data = {
    user: 'ubuntu',
    hosts: {
      0: {
        name: 'web1',
      },
      1: {
        name: 'web2',
        null: 3,
        active: false,
      },
    },
  };

  console.log(getIn(data, ['undefined']));
  console.log(getIn(data, ['user']));
  console.log(getIn(data, ['user', 'ubuntu']));
  console.log(getIn(data, ['hosts', 1, 'name']));
  console.log(getIn(data, ['hosts', 0]));
  console.log(getIn(data, ['hosts', 1, null]));
  console.log(getIn(data, ['hosts', 1, 'active']));
};
