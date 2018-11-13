const warning = require('./warning/warning.service.js');
const potusPrediction = require('./potus-prediction/potus-prediction.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(warning);
  app.configure(potusPrediction);
};
