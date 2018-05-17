const assert = require('assert');
const app = require('../../src/app');
const getUrl = require('../../util/getUrl'); 

describe('\'users\' service', () => {
  it('registered the service', () => {
    const service = app.service(getUrl('users'));
    assert.ok(service, 'Registered the service');
  });
});