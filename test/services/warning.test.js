const assert = require('assert');
const app = require('../../src/app');

describe('\'warning\' service', () => {
  it('registered the service', () => {
    const service = app.service('warnings');

    assert.ok(service, 'Registered the service');
  });
});
