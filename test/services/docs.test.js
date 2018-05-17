const assert = require('assert');
const app = require('../../src/app');
const getUrl = require('../../util/getUrl'); 

describe('\'docs\' service', () => {
  it('registered the service', () => {
    const service = app.service(getUrl('docs'));
    assert.ok(service, 'Registered the service');
  });
});
