// @ts-check
import take from '../src/js_functions/8_users.js';

const users = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
  { name: 'OldRob', birthday: 'Jan 11, 1974' },
];

console.log(take(users, 3));
