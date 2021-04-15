const moment = require("moment");

function clock() {
  let time = moment().format("LTS");
  return time;
}

setInterval(function () {
  clock();
}, 1000);

module.exports = {
  clock,
};
