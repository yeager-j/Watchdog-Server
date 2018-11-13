// Initializes the `potusPrediction` service on path `/potus-predictions`
const createService = require('feathers-mongoose');
const createModel = require('../../models/potus-prediction.model');
const hooks = require('./potus-prediction.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/potus-predictions', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('potus-predictions');

  service.hooks(hooks);
};
