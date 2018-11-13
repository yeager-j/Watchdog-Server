const assert = require('assert');
const app = require('../../src/app');

describe('\'potusPrediction\' service', () => {
  it('registered the service', () => {
    const service = app.service('potus-predictions');

    assert.ok(service, 'Registered the service');
  });
});
