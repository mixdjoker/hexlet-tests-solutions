// @ts-check

const getChildrens = (inputUsers) => {
  const childrens = inputUsers.map((users) => users.children);
  return childrens.flat();
};

export default getChildrens;

// const getChildren = (users) => {
//   const childrenOfUsers = users.map(({ children }) => children);
//   return childrenOfUsers.flat();
// };

// export default getChildren;

// export default (users) => users.flatMap(({ children }) => children);
