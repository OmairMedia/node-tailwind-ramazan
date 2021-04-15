const axios = require("axios");

const getPrayerMethods = async () => {
  const response = await axios.get(" https://api.aladhan.com/methods");
  let methods = response.data.data;
  return methods;
};

module.exports = {
  getPrayerMethods,
};
