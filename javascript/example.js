
const add = val => {
  return val + val;
};
module.exports = async val => {
  return await add(val);
};
