// Initializes the `warning` service on path `/warnings`
const createService = require('feathers-mongoose');
const createModel = require('../../models/warning.model');
const hooks = require('./warning.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/warnings', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('warnings');

  service.hooks(hooks);
};
