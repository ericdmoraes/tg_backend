export default () => {
  const number = Math.random();

  const string = number.toString(36);

  const password = string.slice(5);

  return password;
};
